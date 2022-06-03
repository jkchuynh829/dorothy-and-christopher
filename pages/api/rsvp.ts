// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { GuestRsvpData } from '../../src/store/rsvp';
import { sendConfirmation, sendRsvpAdminNotification } from './utils/sendgrid';

interface Data {
  statusCode: number;
}

const prismaClient = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('RSVP request body: ', req.body);
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
          email: partyRsvpData.email,
        },
        where: {
          id: parseInt(partyRsvpData.id, 10),
        },
      });

      if (party.email) {
        console.log(
          'Party email exists, beginning process to send confirmation email...'
        );

        await sendConfirmation({
          to: party.email,
          subject: "Dorothy & Christopher's Wedding RSVP Confirmation",
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
                    <div>
                      <b>Dietary Restrictions/Allergies:</b> ${
                        guestData.allergies
                      }
                    </div>
                  </div>
                `;
                })
                .join('')}
                <div>
                  <b>Song Requests:</b> ${party.song_requests}
                </div>
              </div>
                  
              <div>
                If you would like to make any changes to your RSVP or meal preferences, you may resubmit your answers in the RSVP form.
                Feel free to respond to this email with any questions or concerns!
              </div>

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
        }).then(() => {
          sendRsvpAdminNotification({
            html: `
            <body>
              <div>You've received a new wedding RSVP from party: ${
                party.name
              }</div>
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
                Yay!
              </div>
            </body>
          `,
          });
        });
      }

      res.send({
        statusCode: 200,
      });
    });
  } catch (error) {
    console.log('Rsvp Api Db Error ', error);
    res.send({
      statusCode: 500,
    });
  }
}
