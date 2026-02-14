export const detectBeginnerZones = (structure) => {
  const beginnerFiles = [];

  const traverse = (nodes, path = "") => {
    for (const node of nodes) {
      const currentPath = `${path}/${node.name}`;

      if (node.type === "file") {
        if (
          node.name.endsWith(".md") ||
          node.name.includes("test") ||
          node.name.includes("config")
        ) {
          beginnerFiles.push(currentPath);
        }
      }

      if (node.children) {
        traverse(node.children, currentPath);
      }
    }
  };

  traverse(structure);
  return beginnerFiles;
};
