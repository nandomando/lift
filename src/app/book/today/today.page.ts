import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/exercises.service';
import { Exercise } from 'src/app/exercise.model';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {
  loadedExercises: Exercise[];

  constructor( private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.loadedExercises = this.exercisesService.exercises;
  }

}
