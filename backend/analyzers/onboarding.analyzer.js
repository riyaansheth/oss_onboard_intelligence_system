export const generateOnboardingGuide = (repoName) => {
  return [
    `Fork the ${repoName} repository on GitHub`,
    "Clone the forked repository to your local system",
    "Create a new branch for your changes",
    "Start with one of the recommended beginner-safe files",
    "Make small and clear changes",
    "Test your changes locally",
    "Commit your changes with a meaningful message",
    "Push the branch to your fork",
    "Open a Pull Request and describe your changes"
  ];
};
