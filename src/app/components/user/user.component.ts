import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran');
  }
  ngOnInit() {
    console.log('ngoninit ran');

    this.name = 'John Doe';
    this.age = 30;
    this.email = 'joe@joe.com',
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write Code', 'Watch Movies', 'Listen to Music' ];

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name='Joe Joe';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0;i <this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
