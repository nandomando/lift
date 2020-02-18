import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  form: FormGroup;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required]}),
      weigth: new FormControl(null, { updateOn: 'blur', validators: [Validators.required]}),
      sets: new FormControl(null, {updateOn: 'blur', validators: [Validators.required]}),
      reps: new FormControl(null, {updateOn: 'blur', validators: [Validators.required]})
    });
  }

  onCreateExercise() {
    console.log(this.form);
  }

  // exerciseSubmit() {
  //   if (!form.valid) {
  //     return;
  //   }

    // const name = form.value.exer;
    // const weigth = form.value.weigth;
    // const sets = form.value.sets;
    // const reps = form.value.reps;
    // this.exercisesService.addExercise(
    //   name,
    //   weigth,
    //   sets,
    //   reps);
  // }
}
