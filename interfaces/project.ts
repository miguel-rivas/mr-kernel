interface ProjectLink {
  url: string;
  text: string;
  self?: boolean;
}

export interface Project {
  date: string;
  title: string;
  types?: Array<string>;
  roles?: Array<string>;
  clients: Array<string>;
  tools?: Array<string>;
  links?: Array<ProjectLink>;
  disabled?: boolean;
  children?: Array<string>;
}