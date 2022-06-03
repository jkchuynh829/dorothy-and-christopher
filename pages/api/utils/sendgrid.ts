import mail from '@sendgrid/mail';

const sendgridApiKey = process.env.SENDGRID_API_KEY ?? '';

mail.setApiKey(sendgridApiKey);

interface SendConfirmationRequest {
  to: string;
  subject: string;
  message: string;
  html?: string;
}

interface RsvpAdminNotificationRequest {
  html: string;
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

const sendRsvpAdminNotification = async ({
  html,
}: RsvpAdminNotificationRequest) => {
  if (sendgridApiKey == '' || sendgridApiKey == null) {
    console.log('Sengrid API Key is missing');
    return { statusCode: 500 };
  }

  try {
    const [response] = await mail.send({
      to: 'duckiexduarte@gmail.com',
      from: {
        email: 'hello@dorothyandchristopher.com',
        name: 'Dorothy & Chris',
      },
      subject: "You've received a new wedding RSVP!",
      text: "You've received a new wedding RSVP!",
      html,
    });

    console.log('Rsvp Admin Notification email response: ', response);
    return { statusCode: response.statusCode };
  } catch (err) {
    console.log('Rsvp Admin Notification email error: ', err);
    return { statusCode: 500, error: (err as any).message };
  }
};

const sendRsvpErrorNotification = async ({
  html,
}: RsvpAdminNotificationRequest) => {
  if (sendgridApiKey == '' || sendgridApiKey == null) {
    console.log('Sengrid API Key is missing');
    return { statusCode: 500 };
  }

  try {
    const [response] = await mail.send({
      to: ['canoc4262@gmail.com', 'jkchuynh829@gmail.com'],
      from: {
        email: 'hello@dorothyandchristopher.com',
        name: 'Dorothy & Chris',
      },
      subject: 'There was an error after an attempt to RSVP to your wedding.',
      text: 'There was an error after an attempt to RSVP to your wedding.',
      html,
    });

    console.log('Rsvp Error Notification email response: ', response);
    return { statusCode: response.statusCode };
  } catch (err) {
    console.log('Rsvp Error Notification email error: ', err);
    return { statusCode: 500, error: (err as any).message };
  }
};

export {
  sendConfirmation,
  sendRsvpAdminNotification,
  sendRsvpErrorNotification,
};
