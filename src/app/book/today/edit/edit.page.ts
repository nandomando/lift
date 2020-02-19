import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/exercise.model';
import { ExercisesService } from 'src/app/exercises.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  exercise: Exercise;
  exerciseId: string;
  form: FormGroup;

  constructor(private exerciseService: ExercisesService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramap => {
      if (!paramap.has('exerciseId')) {
        this.navCtrl.navigateBack('/tabs/tab/book/today');
        return;
      }
      this.exercise = this.exerciseService.getExercise(paramap.get('exerciseId'));
      this.form = new FormGroup({
        weight: new FormControl(this.exercise.weight, {updateOn: 'blur', validators: [Validators.required]}),
        sets: new FormControl(this.exercise.sets, {updateOn: 'blur', validators: [Validators.required]}),
        reps: new FormControl(this.exercise.reps, {updateOn: 'blur', validators: [Validators.required]})
      });
    });
  }

  update() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

}
