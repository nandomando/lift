import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ExercisesService } from './exercises.service';
import { BehaviorSubject } from 'rxjs';
import { Today } from './today.model';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodaysService {
  private _todays = new BehaviorSubject<Today[]> ([
    new Today(
      new Date('2020-02-20'),
      'abc'
    )
  ]);

  get todays() {
    return this._todays.asObservable();
  }
  constructor(
    private authService: AuthService,
    private exerciseService: ExercisesService,
   ) { }

    getToday(date: Date) {
      return this.todays.pipe(
        take(1),
        map(todays => {
          return {...todays.find(element => element.date === date)};
        })
      );
    }

    addToday(date: Date) {
      // if (date <= ) {}
      const newDate = new Today(
        new Date(),
        this.authService.userId
      );
      this.todays.pipe(
        take(1)).subscribe(todays => {
          this._todays.next(todays.concat(newDate));
        });
    }
}
