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
  console.log('\n\n\n\n');
  console.log('----------------------------------');
  console.log('Send Confirmation');
  const [response] = await mail.send({
    to,
    bcc: ['duckiexduarte@gmail.com'],
    from: {
      email: 'hello@dorothyandchristopher.com',
      name: 'Dorothy & Chris',
    },
    subject,
    text: message,
    html,
  });

  console.log('sendgridApiKey', sendgridApiKey);
  console.log('sendgridApiKey', sendgridApiKey);
  console.log('reponse', response);

  if (sendgridApiKey == '' || sendgridApiKey == null) {
    return { statusCode: 500 };
  }

  return { statusCode: response.statusCode };
  console.log('\n\n\n\n');
};

export { sendConfirmation };
