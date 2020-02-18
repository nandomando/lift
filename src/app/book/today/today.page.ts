import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/exercises.service';
import { Exercise } from 'src/app/exercise.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {
  loadedExercises: Exercise[];

  constructor( private exercisesService: ExercisesService, private router: Router) { }

  ngOnInit() {
    this.loadedExercises = this.exercisesService.exercises;
  }

  onEdit(exerciseId: string, slidingitem: IonItemSliding) {
    slidingitem.close();
    this.router.navigate(['/', 'tabs', 'tab', 'book', 'today', 'edit', exerciseId])
  }

}
