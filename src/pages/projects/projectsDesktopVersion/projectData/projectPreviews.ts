import lorem from "./lorem/loremPreview.ts";
import lorem2 from "./lorem2/lorem2Preview.ts";

export interface ProjectPreview {
  id: string;
  title: string;
  dateCreated: string;
  shortIntro: string;
  longIntro: string;
  previewImage: string;
}

export const previews = [lorem, lorem2];
