import { Title } from "../shared/title.model";

export class SeenListService {
  private titles: Title[] = [
    new Title('Creepozoids', 'Horror/Sci-fi'),
    new Title('The Killer Shrews', 'Sci-fi/Horror'),
    new Title('Night of the Creeps', 'Horror/Comedy')
  ];

  getTitles() {
    return this.titles.slice();
  }

    addTitle(title: Title) {
      this.titles.push(title);
    }
}
