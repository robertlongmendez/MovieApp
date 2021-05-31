import { Title } from "../shared/title.model";

export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public titles: Title[];

  constructor(name: string, desc: string, imagePath: string, titles: Title[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.titles = titles;
  }
}
