import type { ProjectPreview } from "../projectPreviews.ts";
import mechanic from "./mechanic.jpg";
import shortIntro from "./shortIntro.txt?raw";
import longIntro from "./longIntro.txt?raw";

const lorem: ProjectPreview = {
  id: "lorem",
  title: "Lorem Ipsum",
  dateCreated: "28.07.2025",
  shortIntro: shortIntro,
  longIntro: longIntro,
  previewImage: mechanic,
};

export default lorem;
