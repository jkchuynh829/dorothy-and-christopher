import mail from '@sendgrid/mail';

const sendgridApiKey = process.env.SENDGRID_API_KEY ?? '';

mail.setApiKey(sendgridApiKey);

interface SendConfirmationRequest {
  to: string;
  subject: string;
  message: string;
  html?: string;
}

const sendConfirmation = async ({
  to,
  subject,
  message,
  html,
}: SendConfirmationRequest) => {
  const [response] = await mail.send({
    to,
    from: {
      email: 'hello@dorothyandchristopher.com',
      name: 'Dorothy & Chris',
    },
    subject,
    text: message,
    html,
  });

  return { statusCode: response.statusCode, apiKey: sendgridApiKey };
};

export { sendConfirmation };
