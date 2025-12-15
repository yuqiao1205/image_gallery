const fakeImages = [
  {
    url: 'https://res.cloudinary.com/prod/image/upload/e_extract:prompt_(camera;glasses;plant)/me/flatlay.jpg',
    title: 'Beautiful Sunset',
    description: 'A stunning sunset over the mountains.',
    time: new Date('2023-10-01T18:00:00Z'),
  },
  {
    url: 'https://res.cloudinary.com/example/image/upload/v1234567891/image_gallery/sample2.jpg',
    title: 'City Skyline',
    description: 'Modern city skyline at night.',
    time: new Date('2023-10-02T20:00:00Z'),
  },
  {
    url: 'https://res.cloudinary.com/example/image/upload/v1234567892/image_gallery/sample3.jpg',
    title: 'Forest Path',
    description: 'A peaceful path through the forest.',
    time: new Date('2023-10-03T10:00:00Z'),
  },
  {
    url: 'https://res.cloudinary.com/example/image/upload/v1234567893/image_gallery/sample4.jpg',
    title: 'Ocean Waves',
    description: 'Waves crashing on the beach.',
    time: new Date('2023-10-04T14:00:00Z'),
  },
  {
    url: 'https://res.cloudinary.com/example/image/upload/v1234567894/image_gallery/sample5.jpg',
    title: 'Mountain Peak',
    description: 'View from the top of a mountain.',
    time: new Date('2023-10-05T08:00:00Z'),
  },
];

const fakeUsers = [
  {
    username: 'admin',
    password: 'password123', // In real app, hash this
    email: 'admin@example.com',
    role: 'admin',
    createdAt: new Date('2023-09-01T00:00:00Z'),
  },
  {
    username: 'user1',
    password: 'userpass1',
    email: 'user1@example.com',
    role: 'user',
    createdAt: new Date('2023-09-02T00:00:00Z'),
  },
  {
    username: 'user2',
    password: 'userpass2',
    email: 'user2@example.com',
    role: 'user',
    createdAt: new Date('2023-09-03T00:00:00Z'),
  },
];

export { fakeImages, fakeUsers };