import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "GET") {
    const { starId } = req.query;

    try {
      const stars = starId
        ? await prisma.star.findUnique({
            where: { id: parseInt(starId) },
          })
        : await prisma.star.findMany();

      res.status(200).json(stars);
    } catch (error) {
      res.status(500).json({ error: "Nie udało się pobrać danych gwiazd." });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
