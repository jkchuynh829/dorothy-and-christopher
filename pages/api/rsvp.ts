// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { sendConfirmation } from './utils/sendgrid';
import { GuestRsvpData } from '../../src/store/guests';

interface Data {
  statusCode: number;
}

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  console.log('RSVP API DATA ', data)
  const guestsRsvpData = data.guestsRsvpData;
  const partyRsvpData = data.partyRsvpData;

  try {
    await prisma.$transaction(async (prisma) => {
      guestsRsvpData.forEach(async (guestData: GuestRsvpData) => {
        await prisma.guests.update({
          data: {
            is_attending: guestData.is_attending,
            is_vaccinated: guestData.is_vaccinated,
            allergies: guestData.allergies,
            meal_preference: guestData.meal_preference
          },
          where: {
            id: parseInt(guestData.id),
          },
        })
      })
      await prisma.parties.update({
        data: {
          song_requests: partyRsvpData.song_requests
        },
        where: {
          id: parseInt(partyRsvpData.id)
        }
      })
      // return [
      // ...guestsRsvpData.map((guestData: GuestRsvpData) => {
      // prisma.guests.update({
      // data: {
      // is_attending: guestData.is_attending,
      // },
      // where: {
      // id: parseInt(guestData.id),
      // },
      // })
      // }),
      // prisma.parties.update({
      // data: {
      // song_requests: partyRsvpData.song_requests
      // },
      // where: {
      // id: parseInt(partyRsvpData.id)
      // }
      // })
      // ]
    })
  } catch (error) {
    console.log('RSVP API DB ERROR ', error)
  }
  // const { statusCode } = await sendConfirmation({
  // to: data.to,
  // subject: data.subject,
  // message: data.message,
  // html: `
  // <body>
  // <div>Thank you for providing your mailing address! We will send a formal invitation to: </div>

  // <br />

  // <div style="font-weight: bold">${data.address}</div>

  // <br />

  // <div>If you would like to make any changes, please resubmit your address using the form on our website: http://dorothyandchristopher.com.</div>
  // <div>Feel free to respond to this email with any questions or concerns! </div>

  // <br />

  // <div>
  // <span>With love,</span><br />
  // <span>Dorothy & Christopher</span><br />
  // <span>August 20, 2022</span><br />
  // </div>
  // <div style="margin-top: 12px;">
  // <img src="https://elasticbeanstalk-us-west-2-842181368088.s3.us-west-2.amazonaws.com/wedding_site_logo.png" height="64px" alt="DC" />
  // </div>
  // </body>
  // `,
  // });

  // res.status(statusCode ?? 500).json({ statusCode });
  console.log("IM DONE")
  res.status(200);
}
