import { Facts } from "../shared/facts.model";

export class Movie {
  public name: string;
  public description: string;
  public imagePath: string;
  public facts: Facts;

  constructor(name: string, desc: string, imagePath: string, facts: Facts) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.facts = facts;
  }
}
