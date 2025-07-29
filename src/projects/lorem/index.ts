import shortIntro from "./preview/shortIntro.txt?raw";
import longIntro from "./preview/longIntro.txt?raw";
import mechanic from "./preview/mechanic.jpg";
import type { Project } from "../projects.ts";
import section1 from "../lorem/section1/section1.txt?raw";
import section2 from "../lorem/section2/section2.txt?raw";
import section2Subsection1 from "../lorem/section2/subsection1.txt?raw";
import section2Diagram1 from "../lorem/section2/diagram.png";
import section2Subsection2 from "../lorem/section2/subsection2.txt?raw";
import section3 from "../lorem/section3/section3.txt?raw";
import section3Subsection1 from "../lorem/section3/subsection1.txt?raw";
import section3Subsection2 from "../lorem/section3/subsection2.txt?raw";

const lorem: Project = {
  title: "Lorem Ipsum",
  dateCreated: "28.07.2025",
  shortIntro: shortIntro,
  longIntro: longIntro,
  previewImage: mechanic,
  sections: [
    {
      title: "Section 1",
      content: section1,
      subsections: [],
    },
    {
      title: "Section 2",
      content: section2,
      subsections: [
        {
          title: "Subsection 1",
          content: section2Subsection1,
        },
        {
          title: "Diagram 1",
          content: section2Diagram1,
        },
        {
          title: "Subsection 2",
          content: section2Subsection2,
        },
      ],
    },
    {
      title: "Section 3",
      content: section3,
      subsections: [
        {
          title: "Subsection 1",
          content: section3Subsection1,
        },
        {
          title: "Subsection 2",
          content: section3Subsection2,
        },
      ],
    },
  ],
};

export default lorem;
