// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendConfirmation } from './utils/sendgrid';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  console.log('data', data);
  sendConfirmation({
    to: data.to,
    subject: data.subject,
    message: data.message,
  });
  res.status(200).json({ name: 'John Doe' });
}
