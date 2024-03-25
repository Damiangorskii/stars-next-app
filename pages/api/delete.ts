import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

    try {
      const deletedStar = await prisma.star.delete({
        where: { id: parseInt(id, 10) },
      });
      res.status(200).json(deletedStar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Nie udało się usunąć gwiazdy." });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
