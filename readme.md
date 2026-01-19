# OSS Onboarding Intelligence System

Automated onboarding for open-source repositories.  
This tool analyzes a codebase and tells new contributors **where to start, what to avoid, and how to contribute safely**.

---

## Problem

New contributors struggle with:
- Large and complex repositories
- Unclear starting points
- Risky first changes
- Heavy dependence on mentors

Static docs and “good first issue” labels do not scale.

---

## Solution

OSS Onboarding Intelligence System acts as a **virtual mentor**.

Given a repository URL, it:
- Analyzes structure, dependencies, and history
- Identifies beginner-friendly areas
- Flags risky core modules
- Generates a personalized onboarding guide

---

## What This Tool Does

- Accepts a GitHub or GitLab repository URL
- Analyzes:
  - File structure and languages
  - Dependencies and coupling
  - Git history and churn
  - Contribution and review patterns
- Generates:
  - Beginner onboarding guide
  - Safe vs risky areas
  - First-issue recommendations
  - Visual architecture map

---

## Tech Stack

- Node.js, TypeScript
- Git CLI, simple-git
- Tree-sitter
- GitHub API (GitLab optional)
- SQLite, JSON
- React, Vite
- D3.js, Mermaid

---

## Output

- Markdown onboarding guide
- Interactive architecture visualization
- Ranked issue recommendations
- Maintainer insights

---

## Project Status

In development.

Planned milestones:
- Repo analysis engine
- Beginner-zone detection
- CLI onboarding report
- Visualization UI

---

## Contributors

- Riyaan Sheth

---

## License

Open-source license (TBD).
