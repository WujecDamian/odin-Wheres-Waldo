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

export { checkAnswer };
