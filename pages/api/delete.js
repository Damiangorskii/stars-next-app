import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      const deletedStar = await prisma.star.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(deletedStar);
    } catch (error) {
      res.status(500).json({ error: "Nie udało się usunąć gwiazdy." });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
