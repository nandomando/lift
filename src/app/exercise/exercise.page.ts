import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { Router } from '@angular/router';
import { TodaysService } from '../todays.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  form: FormGroup;

  constructor(private exercisesService: ExercisesService, private router: Router, private todayService: TodaysService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required]}),
      weight: new FormControl(null, { updateOn: 'blur', validators: [Validators.required]}),
      sets: new FormControl(null, {updateOn: 'blur', validators: [Validators.required]}),
      reps: new FormControl(null, {updateOn: 'blur', validators: [Validators.required]})
    });
  }

  onCreateExercise() {
    if (!this.form.valid) {
      return;
    }
    this.exercisesService.addExercise(
      this.form.value.name,
      +this.form.value.weight,
      +this.form.value.sets,
      +this.form.value.reps,
     );
    this.todayService.addToday();
    this.form.reset();
    this.router.navigate(['/', 'tabs', 'tab', 'book']);
  }
}
