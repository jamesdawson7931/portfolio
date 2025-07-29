import lorem from "./lorem";

export interface Project {
  title: string;
  dateCreated: string;
  shortIntro: string;
  longIntro: string;
  previewImage: string;
  sections: Section[];
}

interface Section {
  title: string;
  content: string;
  subsections: Subsection[];
}

interface Subsection {
  title: string;
  content: string;
}

const projects: Project[] = [lorem];

export default projects;
