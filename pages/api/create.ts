import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, type, constellation, magnitude, distance, imageUrl } = req.body;

    try {
      const newStar = await prisma.star.create({
        data: {
          name,
          type,
          constellation,
          magnitude: Number(magnitude),
          distance: Number(distance),
          imageUrl,
        },
      });
      res.status(200).json(newStar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Nie udało się utworzyć gwiazdy." });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
