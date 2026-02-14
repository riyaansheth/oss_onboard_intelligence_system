export const findBeginnerSafeFiles = (gitStats) => {
  return gitStats
    .filter(item =>
      item.changeCount < 20 &&
      item.commitCount < 15 &&
      (
        item.file.endsWith(".md") ||
        item.file.endsWith(".js") ||
        item.file.endsWith(".json")
      )
    )
    .slice(0, 10);
};
