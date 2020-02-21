import { Component, OnInit, Input } from '@angular/core';

import { ExercisesService } from 'src/app/exercises.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/exercise.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  exercise: Exercise;
  private exerciseSub: Subscription;
  form: FormGroup;
  exerciseId: string;

  constructor(
    private exerciseService: ExercisesService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('exerciseId')) {
        this.navCtrl.navigateBack('/tabs/tab/book/today');
        return;
      }
      this.exerciseId = paramMap.get('exerciseId');
      this.exerciseSub = this.exerciseService
      .getExercise(paramMap.get('exerciseId'))
      .subscribe(exercise => {
        this.exercise = exercise;
        this.form = new FormGroup({
          weight: new FormControl(this.exercise.weight, {updateOn: 'blur', validators: [Validators.required]}),
          sets: new FormControl(this.exercise.sets, {updateOn: 'blur', validators: [Validators.required]}),
          reps: new FormControl(this.exercise.reps, {updateOn: 'blur', validators: [Validators.required]})
        });
      });
      // this.exerciseId = paramap.get('exerciseId');
      // this.exerciseSub = this.exerciseService.getExercise(paramap.get('exerciseId'));
      // this.form = new FormGroup({
      //   weight: new FormControl(this.exercise.weight, {updateOn: 'blur', validators: [Validators.required]}),
      //   sets: new FormControl(this.exercise.sets, {updateOn: 'blur', validators: [Validators.required]}),
      //   reps: new FormControl(this.exercise.reps, {updateOn: 'blur', validators: [Validators.required]})
      // });
    });
  }

  update() {
    // if (!this.form.valid) {
    //   return;
    // }
    // console.log(this.form);
  }

}
