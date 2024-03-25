import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "POST") {
    const { name, type, constellation, magnitude, distance, imageUrl } = req.body;

    try {
      const newStar = await prisma.star.create({
        data: {
          name,
          type,
          constellation,
          magnitude,
          distance,
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
