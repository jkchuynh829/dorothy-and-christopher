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
  if (sendgridApiKey == '' || sendgridApiKey == null) {
    console.log('Sengrid API Key is missing');
    return { statusCode: 500 };
  }

  try {
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

    console.log('Confirmation email response: ', response);
    return { statusCode: response.statusCode };
  } catch (err) {
    console.log('Confirmation email error: ', err);
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

export { sendConfirmation, sendRsvpAdminNotification };
