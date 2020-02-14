import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedExercises: Exercise[];

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.loadedExercises = this.exercisesService.exercises;
  }

}
