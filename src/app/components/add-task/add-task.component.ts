import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs'
import { UiService } from 'src/app/services/ui.service';
import {Task} from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showForm!: boolean;
  subscription = new Subscription;
  

  constructor(private uiService: UiService) { 
    this.uiService.onToggle().subscribe(value => this.showForm = value)
  }

  ngOnInit(): void {
  }

  handleSubmit(){
    if(!this.text) {
      return alert("Task field is required")
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)
    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
