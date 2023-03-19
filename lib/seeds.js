const seeds = [
  {
    image:
      "https://replicate.delivery/pbxt/IBnrzJD8Vvz3rD7yF5W8ODnpeA5wcoNpP1RRiDutqW1nG8eF/example.jpeg",
    prompt: "turn him into cyborg",
  },
  {
    image:
      "https://replicate.delivery/pbxt/IC4rMszBZtp6EZSDEDZXzdo7iPcW1IR6yOEsX0kef4kJJusD/2.jpeg",
    prompt: "Turn the humans into robots",
  },
  {
    image:
      "https://replicate.delivery/pbxt/IC527OFS14MxB6bRf4xVJVxMCoMEUg15BYvctDc029WqTupk/4.png",
    prompt: "replace the fruit with cakes",
  },
  {
    image:
      "https://user-images.githubusercontent.com/2289/215219780-cb4a0cdb-6fea-46fe-ae22-12d68e5ba79f.jpg",
    prompt: "make his jacket out of leather",
  },
  {
    image:
      "https://user-images.githubusercontent.com/2289/215241066-654c5acf-8293-4fb1-a85d-c87a0297a30b.jpg",
    prompt: "what would it look like if it were snowing?",
  },
  {
    image:
      "https://user-images.githubusercontent.com/2289/215248577-bdf7c342-e65c-4b11-bc53-cdb2c0c52d8b.jpg",
    prompt: "add fireworks to the sky",
  },
  {
    image:
      "https://user-images.githubusercontent.com/2289/215248708-80787623-fff4-4b22-a548-e5c46b055244.png",
    prompt: "swap sunflowers with roses",
  },
];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
