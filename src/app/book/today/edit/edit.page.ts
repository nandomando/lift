import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/exercise.model';
import { ExercisesService } from 'src/app/exercises.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  exercise: Exercise;
  exerciseId: string;

  constructor(private exerciseService: ExercisesService) { }

  ngOnInit() {
  }

}
