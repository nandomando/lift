import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodaysService } from '../todays.service';
import { Today } from '../today.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit, OnDestroy {

  loadedTodays: Today[];
  private onDestroySub: Subscription;

  constructor(private todayService: TodaysService) { }

  ngOnInit() {
    this.onDestroySub = this.todayService.todays.subscribe(elements => {
      this.loadedTodays = elements;
    });
  }

  ngOnDestroy() {
    if (this.onDestroySub) {
      this.onDestroySub.unsubscribe();
    }
  }

}
