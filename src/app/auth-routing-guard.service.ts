import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {authService} from './auth.service';

@Injectable()
export class authRoutingGuardService implements CanActivate, CanActivateChild{
    constructor(private authServe:authService, private router:Router){}
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> |Promise<boolean> | boolean {
        return this.authServe.isUserLoggedIn()
        .then(
            (authenticated:boolean)=>{
            if(authenticated){
                alert("its true");
                return true;
            }
            else{
                alert("its false");
                this.router.navigate(['/']);
                return false;
            }
            });
         }

         canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
            return this.canActivate(route, state);
         }
    }