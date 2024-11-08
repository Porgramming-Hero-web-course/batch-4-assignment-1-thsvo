function countWordOccurrences(sentence: string, word: string): number {
  const words = sentence.toLowerCase().split(" ");
  console.log(words);
  return words.filter((singletext) => singletext === word).length;
}

console.log(
  countWordOccurrences(
    "TypeScript is great. I love  love love TypeScript!",
    "love"
  )
);
