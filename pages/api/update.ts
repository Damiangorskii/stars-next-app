import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface StarUpdateInput {
  id: number;
  name: string;
  type: string;
  constellation?: string;
  magnitude?: number;
  distance?: number;
  imageUrl?: string;
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const { id, name, type, constellation, magnitude, distance, imageUrl }: StarUpdateInput = req.body;

    try {
      const updatedStar = await prisma.star.update({
        where: { id: Number(id) },
        data: {
          name,
          type,
          constellation,
          magnitude: magnitude ? Number(magnitude) : undefined,
          distance: distance ? Number(distance) : undefined,
          imageUrl,
        },
      });
      res.status(200).json(updatedStar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Nie udało się zaktualizować gwiazdy." });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
