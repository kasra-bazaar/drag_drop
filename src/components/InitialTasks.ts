import { type initialState } from "~/types";

export const InitialTasks: initialState[] = [
  {
    id: "1",
    title: "Set up project infrastructure",
    description:
      "Initialize repository, configure development environment, and set up basic project structure",
    status: "ToDo",
  },
  {
    id: "2",
    title: "Implement user authentication",
    description:
      "Create login/signup forms and integrate with backend authentication service",
    status: "ToDo",
  },
  {
    id: "3",
    title: "Design responsive dashboard",
    description:
      "Create mobile-friendly layout for main dashboard with key metrics and navigation",
    status: "In Progress",
  },
  {
    id: "4",
    title: "Add drag-and-drop functionality",
    description:
      "Implement drag-and-drop feature for task management using React DnD library",
    status: "Done",
  },
];
