import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { AuthService } from './auth/auth.service';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private _exercises = new BehaviorSubject <Exercise[]>([
      new Exercise('p1',
      'Bench Press',
      'https://fitnessarabais.com/wp-content/uploads/2019/11/4201_9201powerliftingbench.jpg',
      3,
      10,
      100,
      new Date('2020-02-20'),
      'abc'
      ),
      new Exercise('p2',
      'Squat',
      'https://sc02.alicdn.com/kf/HTB1kIexXxv1gK0jSZFFq6z0sXXaZ/202331751/HTB1kIexXxv1gK0jSZFFq6z0sXXaZ.jpg',
      3,
      4,
      150,
      new Date('2020-02-20'),
      'abc'
      ),
      new Exercise('p3',
      'Military Press',
      'https://indigofitness.com/wp-content/uploads/2017/04/U030-R-Military-Press-with-grip-plates-Render.jpg',
      6,
      2,
      60,
      new Date('2020-02-21'),
      'abc'
      )
    ]
  );

  get exercises() {
    return this._exercises.asObservable();
  }

  constructor(private authService: AuthService) { }

  getExercise(id: string) {
    return this.exercises.pipe(
      take(1),
      map(exercises => {
      return  {...exercises.find(element => element.id === id) };
    })
    );
  }

  addExercise(
    name: string,
    sets: number,
    reps: number,
    weight: number
    ) {
      const newExercise = new Exercise(
        Math.random().toString(),
        name,
        'https://indigofitness.com/wp-content/uploads/2017/04/U030-R-Military-Press-with-grip-plates-Render.jpg',
        sets,
        reps,
        weight,
        new Date(),
        this.authService.userId
      );
      this.exercises.pipe(
        take(1)).subscribe(exercises => {
        this._exercises.next(exercises.concat(newExercise));
      });
    }

    updateExercise() {

    }
}
