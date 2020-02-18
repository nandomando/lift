import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExercisesService } from 'src/app/exercises.service';
import { Exercise } from 'src/app/exercise.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit, OnDestroy {
  loadedExercises: Exercise[];
  private exerciseDestroySub: Subscription;

  constructor( private exercisesService: ExercisesService, private router: Router) { }

  ngOnInit() {
    this.exerciseDestroySub = this.exercisesService.exercises.subscribe(elements => {
      this.loadedExercises = elements;
    });
  }

  onEdit(exerciseId: string, slidingitem: IonItemSliding) {
    slidingitem.close();
    this.router.navigate(['/', 'tabs', 'tab', 'book', 'today', 'edit', exerciseId]);
  }

  ngOnDestroy() {
    if (this.exerciseDestroySub) {
      this.exerciseDestroySub.unsubscribe();
    }
  }

}
