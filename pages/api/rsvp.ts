// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { GuestRsvpData } from '../../src/store/guests';
import { sendConfirmation } from './utils/sendgrid';

interface Data {
  statusCode: number;
}

const prismaClient = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  const guestsRsvpData = data.guestsRsvpData;
  const partyRsvpData = data.partyRsvpData;

  try {
    await prismaClient.$transaction(async (prisma) => {
      await Promise.all(
        guestsRsvpData.map(async (guestData: GuestRsvpData) => {
          await prisma.guests.update({
            data: {
              is_attending: guestData.is_attending,
              is_vaccinated: guestData.is_vaccinated,
              allergies: guestData.allergies,
              meal_preference: guestData.meal_preference,
            },
            where: {
              id: parseInt(guestData.id, 10),
            },
          });
        })
      );

      const party = await prisma.parties.update({
        data: {
          song_requests: partyRsvpData.song_requests,
        },
        where: {
          id: parseInt(partyRsvpData.id, 10),
        },
      });

      if (party.email) {
        sendConfirmation({
          to: 'canoc4262@gmail.com',
          subject: 'RSVP Test',
          message:
            'Thank you for your RSVP! We look forward to celebrating with you on August 20, 2022.',
          html: `
          <body>
            <div>Thank you for your RSVP! We look forward to celebrating with you on August 20, 2022.</div>      
            <br /> 
            <div style="font-weight: bold">
              ${data.guestsRsvpData
                .map((guestData: GuestRsvpData) => {
                  return `
                  <div style="margin-bottom: 24px">
                    <div>${guestData.first_name} ${guestData.last_name}</div>
                    <div>
                      <b>Attending:</b> ${
                        guestData.is_attending === true ? 'Yes' : 'No'
                      }
                    </div>
                    <div>
                      <b>Meal Preference:</b> ${guestData.meal_preference}
                    </div>
                  </div>
                `;
                })
                .join('')}
              </div>
                  
              <div>
                If you would like to make any changes to your RSVP or meal preferences, you may resubmit your answers in the RSVP form.
                Feel free to respond to this email with any questions or concerns!
              </div>

              <div>Feel free to respond to this email with any questions or concerns! </div>
                  
              <br />
                  
              <div>
                <span>With love,</span><br />
                <span>Dorothy & Christopher</span><br />
                <span>August 20, 2022</span><br />
              </div>

              <div style="margin-top: 12px;">
                  <img src="https://elasticbeanstalk-us-west-2-842181368088.s3.us-west-2.amazonaws.com/wedding_site_logo.png" height="64px" alt="DC" />
              </div>
            </body>
          `,
        });
      }

      res.send({
        statusCode: 200,
      });
    });
  } catch (error) {
    console.log('RSVP API DB ERROR ', error);
    res.send({
      statusCode: 500,
    });
  }
}
