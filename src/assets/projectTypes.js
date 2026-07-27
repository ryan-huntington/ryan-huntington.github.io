import { FaBrain, FaGamepad, FaNetworkWired, FaCode } from "react-icons/fa6";

// Visual system keyed off a project's `projectType`. Each entry provides an
// accent color (anchored in the site's indigo -> magenta hero gradient) and an
// icon, reused across project cards, badges, and subpage heroes so the whole
// site reads as one system.
const PROJECT_TYPES = {
  "Machine Learning": { color: "#7c3aed", icon: FaBrain },
  "Game Development": { color: "#e7008a", icon: FaGamepad },
  "Networking": { color: "#0ea5b7", icon: FaNetworkWired },
  "Software Engineering": { color: "#432fbf", icon: FaCode },
};

const DEFAULT_TYPE = { color: "#432fbf", icon: FaCode };

export function getProjectType(type) {
  return PROJECT_TYPES[type] || DEFAULT_TYPE;
}

export default PROJECT_TYPES;
