import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExercisesService } from 'src/app/exercises.service';
import { Exercise } from 'src/app/exercise.model';
import { IonItemSliding, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodaysService } from 'src/app/todays.service';
import { Today } from 'src/app/today.model';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit, OnDestroy {
  today: Today;
  todayId: string;
  loadedExercises: Exercise[];
  loadedTodays: Today[];
  private exerciseDestroySub: Subscription;
  private todaySyb: Subscription;

  constructor(
    private exercisesService: ExercisesService,
    private router: Router,
    private todayService: TodaysService,
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('todayId')) {
        this.navCtrl.navigateBack('tabs/tab/book');
        return;
      }
      this.todayId = paramMap.get('todayId');
      this.todaySyb = this.todayService.todays.subscribe(elements => {
        this.loadedTodays = elements;
        this.exerciseDestroySub = this.exercisesService.exercises.subscribe(elemets => {
          this.loadedExercises = elemets;
      });
      });
    });
  }

  onEdit(exerciseId: string, slidingitem: IonItemSliding) {
    slidingitem.close();
    this.router.navigate(['/', 'tabs', 'tab', 'book', 'today', this.todayId, 'edit', exerciseId]);
  }

  ngOnDestroy() {
    if (this.exerciseDestroySub) {
      this.exerciseDestroySub.unsubscribe();
    }
  }


  // comparetion() {
  //   const dateoftoday = this.today.date;
  //   const dateofexercise = this.exercisesService.exercises.todayDate;
  //   if (dateoftoday === dateofexercise) {

  //   }
  // }

}
