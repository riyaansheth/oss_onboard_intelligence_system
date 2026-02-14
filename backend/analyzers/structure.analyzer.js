import fs from "fs";
import path from "path";

export const analyzeStructure = (dirPath, depth = 0) => {
  if (depth > 3) return [];

  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  return items.map(item => {
    const fullPath = path.join(dirPath, item.name);

    if (item.isDirectory()) {
      return {
        name: item.name,
        type: "folder",
        children: analyzeStructure(fullPath, depth + 1)
      };
    }

    return {
      name: item.name,
      type: "file"
    };
  });
};
