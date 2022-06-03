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
    return { statusCode: 500 };
  }

  try {
    const [response] = await mail.send({
      to,
      bcc: [
        'duckiexduarte+wedding-rsvp-admin@gmail.com',
        'jkchuynh829+wedding-rsvp-admin@gmail.com',
        'canoc4262+wedding-rsvp-admin@gmail.com',
      ],
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
    return { statusCode: response.statusCode };
  } catch (err) {
    console.log('err', err);
    return { statusCode: 500, error: (err as any).message };
  }
};

export { sendConfirmation };
