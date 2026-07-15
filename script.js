import { prisma } from "./lib/prisma.js";

async function main() {
  // Create a new user with a post
  const level = await prisma.level.create({
    data: {
      name: "Alice",
      difficulty: "alice@prisma.io",
      img_url:
        "https://vuss.io/wp-content/uploads/2025/01/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg",
      characters: {
        create: [
          {
            character_name: "Waldo",
            img_url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgH6Z84jR4HnWfFdWLGJWRFUeKtX1pHMDVU_12GUrbh-ceiHznlcp6Ysi&s=10",
            x1: 60.5,
            x2: 63.0,
            y1: 36.5,
            y2: 41.5,
          },
          {
            character_name: "Wilma",
            img_url:
              "https://kotaksuratriza.wordpress.com/wp-content/uploads/2012/06/wilma.jpg",
            x1: 76.5,
            x2: 77.8,
            y1: 39.5,
            y2: 42.5,
          },
          {
            character_name: "Wizard",
            img_url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV8SaKOF00Fl30C0FcteBnFAzVWa143MXh95mfkJHgFWIjrNykVLEDKQ&s=10",
            x1: 26.0,
            x2: 28.5,
            y1: 33.5,
            y2: 38.5,
          },
          {
            character_name: "Odlaw",
            img_url:
              "https://avatars.fastly.steamstatic.com/66fbbe0f9060ba54bbeecbe4df707de39d6311c7_full.jpg",
            x1: 10.0,
            x2: 11.25,
            y1: 34.3,
            y2: 39.45,
          },
        ],
      },
      leaderboards: {
        create: [
          {
            username: "jerryplayerGTA",
            completion_time: 352,
          },
          {
            username: "Mikewater9",
            completion_time: 392,
          },
          {
            username: "NotAwAlDo",
            completion_time: 420,
          },
          {
            username: "xyzgaming",
            completion_time: 492,
          },
          {
            username: "somenamelololo",
            completion_time: 511,
          },
          {
            username: "bugatti_guy",
            completion_time: 512,
          },
        ],
      },
    },
    include: {
      characters: true,
      leaderboards: true,
    },
  });
  console.log("Created Level:", level);

  // Fetch all users with their posts
  const allLevels = await prisma.level.findMany({
    include: {
      characters: true,
      leaderboards: true,
    },
  });
  console.log("All levels:", JSON.stringify(allLevels, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
