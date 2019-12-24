import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {authService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private authServiceTemp:authService) { 

  }

  goToServerRoute(id:number){
// do complex calculation
this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:1},fragment:'loading'});
  }
  login(){
    this.authServiceTemp.logIn();
  }

  logOut(){
    this.authServiceTemp.logOut();

  }
  ngOnInit() {
  }

}
