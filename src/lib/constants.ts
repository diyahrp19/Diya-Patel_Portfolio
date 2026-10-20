/**
 * Single source of truth for navigation items and personal links,
 * shared by the Navigation, Hero, and Contact components.
 */

export const PERSONAL_INFO = {
  name: "Diya Patel",
  email: "diyahrp05@gmail.com",
  github: "https://github.com/diyahrp19",
  linkedin: "https://www.linkedin.com/in/diyapatel19",
  location: "Ahmedabad, Gujarat",
} as const;

/**
 * Gmail compose URL used by the Contact section's Email card. It opens Gmail's
 * compose interface in a new tab (target="_blank" rel="noopener noreferrer")
 * with the recipient pre-filled, so the portfolio page is never replaced.
 */
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`;

export interface NavItem {
  name: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "About Me", id: "about" },
  { name: "My Journey", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

