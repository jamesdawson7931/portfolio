import type { ProjectPreview } from "../projectPreviews.ts";
import shortIntro from "./shortIntro.txt?raw";
import longIntro from "./longIntro.txt?raw";
import soup from "./soup.jpg";

const lorem2: ProjectPreview = {
  id: "lorem2",
  title: "Lorem Ipsum",
  dateCreated: "28.07.2025",
  shortIntro: shortIntro,
  longIntro: longIntro,
  previewImage: soup,
};

export default lorem2;
