import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  loadedExercises: Exercise[];
  private onDestroySub: Subscription;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this. onDestroySub = this.exercisesService.exercises.subscribe(elements => {
      this.loadedExercises = elements;
    });
  }

  ngOnDestroy() {
    if (this.onDestroySub) {
      this.onDestroySub.unsubscribe();
    }
  }

}
