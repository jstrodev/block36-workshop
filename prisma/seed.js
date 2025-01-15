const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
  // First clear existing data
  await prisma.playlist.deleteMany({});
  await prisma.user.deleteMany({});

  // Create 5 users
  const users = [];
  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        playlists: {
          create: Array.from({ length: faker.number.int({ min: 5, max: 8 }) }, () => ({
            name: faker.music.genre() + " " + faker.word.adjective(),
            description: faker.lorem.sentence(),
          })),
        },
      },
      // Include playlists in the return data for logging
      include: {
        playlists: true,
      },
    });
    users.push(user);
  }

  console.log('Seeding completed! Created:');
  users.forEach(user => {
    console.log(`User ${user.username} with ${user.playlists.length} playlists`);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });