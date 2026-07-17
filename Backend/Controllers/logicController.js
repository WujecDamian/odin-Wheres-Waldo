import { prisma } from "../../lib/prisma.js";

const checkAnswer = async (req, res) => {
  const levelId = req.params["gameLevel"];
  const { percentageX, percentageY } = req.body;
  const character = await prisma.character.findUnique({
    where: { id: Number(req.body.characterId), levelId: Number(levelId) },
  });

  if (
    percentageX > character.x1 &&
    percentageX < character.x2 &&
    percentageY > character.y1 &&
    percentageY < character.y2
  ) {
    console.log("True - You clicked on correct character");
    res.json({ isCorrect: true });
  } else {
    res.json({ isCorrect: false });
  }
};

const deleteScore = async (req, res) => {
  const levelId = req.params["gameLevel"];
  const { scoreId } = req.body;
  await prisma.leaderboard.delete({
    where: { id: Number(scoreId), levelId: Number(levelId) },
  });

  res.json({ message: "Successfully deleted record" });
};
const addScore = async (req, res) => {
  const levelId = req.params["gameLevel"];
  const { username, completion_time } = req.body;
  const newScore = await prisma.leaderboard.create({
    data: {
      completion_time: Number(completion_time),
      levelId: Number(levelId),
      username: username,
    },
  });

  res.json({ message: "Successfully added record", newScore });
};

export { checkAnswer, deleteScore, addScore };
