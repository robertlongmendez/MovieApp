import { Title } from "../shared/title.model";

export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public title: Title;

  constructor(name: string, desc: string, imagePath: string, title: Title) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.title = title;
  }
}
