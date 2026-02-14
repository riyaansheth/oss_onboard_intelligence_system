export const explainBeginnerSafeFiles = (files) => {
  return files.map(item => {
    let reason = "This file has a low change frequency and is safe for beginners.";

    if (item.file.endsWith(".md")) {
      reason = "This is a documentation file. Improving docs is a great first contribution.";
    } else if (item.file.endsWith(".json")) {
      reason = "This configuration file is small and easy to understand.";
    } else if (item.file.endsWith(".js")) {
      reason = "This JavaScript file has limited changes and is not part of core logic.";
    }

    return {
      file: item.file,
      changeCount: item.changeCount,
      reason
    };
  });
};
