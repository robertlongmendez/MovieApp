import { Title } from "../shared/title.model";
import { Subject } from "rxjs";

export class SeenListService {
  titlesChanged = new Subject<Title[]>();
  startedEditing = new Subject<number>();
  private titles: Title[] = [
    new Title('Creepozoids', 'Horror Sci-fi', '1987'),
    new Title('The Killer Shrews', 'Sci-fi Horror', '1959'),
    new Title('Night of the Creeps', 'Horror Comedy', '1986')
  ];

  getTitles() {
    return this.titles.slice();
  }

  getTitle(index: number) {
    return this.titles[index];
  }

    addTitle(title: Title) {
      this.titles.push(title);
      this.titlesChanged.next(this.titles.slice());
    }

    addMovies(titles: Title[]) {
      this.titles.push(...titles);
      this.titlesChanged.next(this.titles.slice());
    }

    updateTitle(index: number, newTitle: Title) {
      this.titles[index] = newTitle;
      this.titlesChanged.next(this.titles.slice());
    }
    deleteTitle(index: number) {
      this.titles.splice(index, 1);
      this.titlesChanged.next(this.titles.slice());
    }
}
