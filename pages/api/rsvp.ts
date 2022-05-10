// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { GuestRsvpData } from '../../src/store/guests';

interface Data {
  statusCode: number;
}

const prismaClient = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);
  const guestsRsvpData = data.guestsRsvpData;
  const partyRsvpData = data.partyRsvpData;

  try {
    await prismaClient.$transaction(async (prisma) => {
      guestsRsvpData.forEach(async (guestData: GuestRsvpData) => {
        await prisma.guests.update({
          data: {
            is_attending: guestData.is_attending,
            is_vaccinated: guestData.is_vaccinated,
            allergies: guestData.allergies,
            meal_preference: guestData.meal_preference,
          },
          where: {
            id: parseInt(guestData.id),
          },
        });
      });
      await prisma.parties.update({
        data: {
          song_requests: partyRsvpData.song_requests,
        },
        where: {
          id: parseInt(partyRsvpData.id),
        },
      });
    });
  } catch (error) {
    console.log('RSVP API DB ERROR ', error);
  }

  console.log('IM DONE');
  res.status(200);
}
