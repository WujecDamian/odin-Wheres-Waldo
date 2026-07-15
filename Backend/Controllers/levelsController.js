import { prisma } from "../../lib/prisma.js";

const getAllLevels = async (req, res) => {
  const allLevels = await prisma.level.findMany();
  res.json({ allLevels });
};

export { getAllLevels };
