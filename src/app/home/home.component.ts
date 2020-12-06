import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface todo{
  status: State;
  userName: string;
  userSurname: string;
  userage: number;
  userGen: Gender;
  projName: string;
  projDescription: string;
  deadline: string;
  todoID: number;
}
export enum State {
  created = 'created',
  inProgress = 'inProgress',
  done = 'done'
}
export enum Gender {
  masculine = 'Masculine',
  feminine = 'Feminine',
  neutrum = 'Neutrum'
}

export interface updateTODOStatus {
  id: string;
  status: string;
}

export interface createTODOStatus {
  status: State;
  userName: string;
  userSurname: string;
  userage: number;
  userGen: string;
  projName: string;
  projDescription: string;
  deadline: string;
  todoID: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  todoList: Array<todo> = [];
  name = 'Angular';
  deleteByID = 0;
  dateTime: any;
  myTodos: todo[] = [];
  columns = ['status', 'userName', 'userSurname', 'userage',
    'userGen', 'projName', 'projDescription', 'deadline', 'todoID'];

  updateStatus: updateTODOStatus = {
    id: '',
    status: ''
  };

  createToDo: createTODOStatus = {
    status: State.created,
    userName: '',
    userSurname: '',
    userage: 0,
    userGen: '',
    projName: '',
    projDescription: '',
    deadline: '',
    todoID: 0,
  };

  ngOnInit(): void {

    const DateNow = Date.now();
    this.dateTime = new Date(DateNow).toString();
    console.log(this.dateTime);

    this.myTodos = [
      {
        status: State.created,
        userName: 'Tornike',
        userSurname: 'Khachidze',
        userage: 34,
        userGen: Gender.masculine,
        projName: 'Social Media',
        projDescription: 'We care about our city',
        deadline: '01.01.2020',
        todoID: 1
      },
      {
        status: State.inProgress,
        userName: 'Mari',
        userSurname: 'Müller',
        userage: 30,
        userGen: Gender.feminine,
        projName: 'School Project',
        projDescription: 'Education is importent',
        deadline: '05.04.2020',
        todoID: 2
      },
      {
        status: State.done,
        userName: 'Giorgi',
        userSurname: 'Fischer',
        userage: 25,
        userGen: Gender.masculine,
        projName: 'Driving',
        projDescription: 'I love driving',
        deadline: '17.09.2020',
        todoID: 3
      },
    ];

  }

  setHeader(title: string): any{
    return title;
  }

  setData(todo: any, title: any): any{
    return todo;
  }


  updateTODOStatus(updateStatus: any): any{
    console.log(updateStatus);
    for (let i = 0; i < this.myTodos.length; i++) {
      console.log(this.myTodos[i].todoID);
      console.log(updateStatus.id);
      console.log(this.myTodos[i].status);
      if (this.myTodos[i].todoID == updateStatus.id){
        this.myTodos[i].status = updateStatus.status;
        console.log('updated');
      }
    }
  }

  createNewTODO(createToDo: any): any {
    console.log(createToDo);
    this.myTodos.push(createToDo);
  }

  deleteTODOById() {
    console.log(this.deleteByID);
    this.myTodos = this.myTodos.filter(item => item.todoID != this.deleteByID);
  }

}
