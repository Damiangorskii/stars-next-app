import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { starId } = req.query;

    try {
      const stars = starId
        ? await prisma.star.findUnique({
            where: { id: parseInt(Array.isArray(starId) ? starId[0] : starId) },
          })
        : await prisma.star.findMany();

      if (starId && !stars) {
        return res.status(404).json({ error: "Gwiazda nie została znaleziona." });
      }

      res.status(200).json(stars);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Nie udało się pobrać danych gwiazd." });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
