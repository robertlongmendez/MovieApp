import { Subject } from "rxjs";
import { Title } from "../shared/title.model";

export class SeenListService {
  titlesChanged = new Subject<Title[]>();
  private titles: Title[] = [
    new Title('Creepozoids', 'Horror Sci-fi', '1987'),
    new Title('The Killer Shrews', 'Sci-fi Horror', '1959'),
    new Title('Night of the Creeps', 'Horror Comedy', '1986')
  ];

  getTitles() {
    return this.titles.slice();
  }

    addTitle(title: Title) {
      this.titles.push(title);
      this.titlesChanged.next(this.titles.slice());
    }

    addMovies(titles: Title[]) {
      this.titles.push(...titles);
      this.titlesChanged.next(this.titles.slice());
    }
}
