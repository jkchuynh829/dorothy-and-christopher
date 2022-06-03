// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { GuestRsvpData } from '../../src/store/rsvp';
import { sendConfirmation } from './utils/sendgrid';

interface Data {
  statusCode: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  const { statusCode } = await sendConfirmation({
    to: data.to,
    subject: data.subject,
    message: data.message,
    html: `
      <body>
        <div>Thank you for your RSVP! We look forward to celebrating with you on August 20, 2022. </div>
        
        <br />
    
        <div style="font-weight: bold">
        ${data.guestsRsvpData.map((guestData: GuestRsvpData) => {
          return `<div>
              <div>${guestData.first_name} ${guestData.last_name}</div>
                <div>
                  <b>Attending:</b> ${
                    guestData.is_attending === true ? 'Yes' : 'No'
                  }
                </div>
                <div>
                  <b>Meal Preference:</b> ${guestData.meal_preference}
                </div>
            </div>`;
        })}
        </div>
    
        <br />
        
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
  });

  res.status(statusCode ?? 500).json({ statusCode });
}
