import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "PUT") {
    const { id, name, type, constellation, magnitude, distance, imageUrl } = req.body;

    try {
      const updatedStar = await prisma.star.update({
        where: { id: parseInt(id) },
        data: {
          name,
          type,
          constellation,
          magnitude,
          distance,
          imageUrl,
        },
      });
      res.status(200).json(updatedStar);
    } catch (error) {
      res.status(500).json({ error: "Nie udało się zaktualizować gwiazdy." });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
