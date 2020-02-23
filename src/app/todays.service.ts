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
      't1',
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

    getToday(id: string) {
      return this.todays.pipe(
        take(1),
        map(todays => {
          return {...todays.find(element => element.id === id)};
        })
      );
    }

    addToday() {
      // if (date <= ) {}
      const newDate = new Today(
        Math.random().toString(),
        new Date(),
        this.authService.userId
      );
      this.todays.pipe(
        take(1)).subscribe(todays => {
          this._todays.next(todays.concat(newDate));
        });
    }
}
