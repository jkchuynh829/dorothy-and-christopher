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

  if (sendgridApiKey == '' || sendgridApiKey == null) {
    console.log('Sendgrid API Key is not present.');
    return { statusCode: 500 };
  }

  try {
    console.log(
      'Sendgrid API Key is present, attempting mail send api call...'
    );

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

    console.log('RSVP confirmation response: ', response);
    return { statusCode: response.statusCode };
  } catch (err) {
    console.log('RSVP confirmation error: ', err);
    return { statusCode: 500, error: (err as any).message };
  }
};

export { sendConfirmation };
