import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private _exercises: Exercise[] = [
    new Exercise('p1',
    'Bench Press',
    'https://fitnessarabais.com/wp-content/uploads/2019/11/4201_9201powerliftingbench.jpg',
    3,
    10,
    100,
    'abc'
    ),
    new Exercise('p2',
    'Squat',
    'https://sc02.alicdn.com/kf/HTB1kIexXxv1gK0jSZFFq6z0sXXaZ/202331751/HTB1kIexXxv1gK0jSZFFq6z0sXXaZ.jpg',
    3,
    4,
    150,
    'abc'
    ),
    new Exercise('p3',
    'Military Press',
    'https://indigofitness.com/wp-content/uploads/2017/04/U030-R-Military-Press-with-grip-plates-Render.jpg',
    6,
    2,
    60,
    'abc'
    )
  ];

  get exercises() {
    return [...this._exercises];
  }

  constructor(private authService: AuthService) { }

  addExercise(
    name: string,
    imageUrl: string,
    sets: number,
    reps: number,
    weight: number
    ) {
      const newExercise = new Exercise(
        Math.random().toString(),
        name,
        imageUrl = 'https://indigofitness.com/wp-content/uploads/2017/04/U030-R-Military-Press-with-grip-plates-Render.jpg',
        sets,
        reps,
        weight,
        this.authService.userId
      );
      this._exercises.push(newExercise);
    }
}
