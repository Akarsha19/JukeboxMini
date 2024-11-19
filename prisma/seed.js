const seed = async () => {
  for (let i = 0; i < 3; i++) {
    const playlists = [];
    for (let j = 0; j < 5; j++) {
      playlists.push({
        name: `Person ${i}${j}`,
        description: `${i}${j}@foo.bar`,
        playlist: Math.floor(Math.random() * 10) + 1,
      });
    }


    await prisma.user.create({
      data: {
        name: `User ${i + 1}`,
        playlists: {
          create: playlists,
        },
      },
    });
  }
};