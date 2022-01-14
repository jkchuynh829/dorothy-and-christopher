// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendConfirmation } from './utils/sendgrid';

interface Data {
  statusCode: number;
  apiKey: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  const { statusCode, apiKey } = await sendConfirmation({
    to: data.to,
    subject: data.subject,
    message: data.message,
    html: `
      <body>
        <div>Thank you for providing your mailing address! We will send a formal invitation to: </div>

        <br />

        <div style="font-weight: bold">${data.address}</div>

        <br />
        
        <div>If you would like to make any changes, please resubmit your address using the form on our website: http://dorothyandchristopher.com.</div>
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
  res.status(202).json({ statusCode, apiKey });
}
