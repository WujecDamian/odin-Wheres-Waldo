import { prisma } from "../../lib/prisma.js";

const getAllLevels = async (req, res) => {
  const allLevels = await prisma.level.findMany();
  res.json({ allLevels });
};
const getLevel = async (req, res) => {
  const levelId = req.params["gameLevel"];
  const level = await prisma.level.findUnique({
    where: { id: Number(levelId) },
    include: {
      characters: true,
    },
  });
  res.json({ level });
};
const getLevelLeaderboard = async (req, res) => {
  const levelId = req.params["gameLevel"];
  const leaderboard = await prisma.leaderboard.findMany({
    where: { levelId: Number(levelId) },
  });
  res.json({ leaderboard });
};

export { getAllLevels, getLevel, getLevelLeaderboard };
