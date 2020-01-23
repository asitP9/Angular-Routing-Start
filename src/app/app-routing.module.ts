import {HomeComponent} from '../app/home/home.component';
import {UserComponent} from '../app/users/user/user.component'
import {UsersComponent} from '../app/users/users.component'
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ErrorPageComponent} from './error-page/error-page.component'
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanDeactivateGuard} from './deactivate-routing-guard.service'
import {authRoutingGuardService} from './auth-routing-guard.service';
import {serverResolver} from '../app/servers/server/server-resolver.service'

const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'users', component:UsersComponent, children:[{
                path:':id/:name', component:UserComponent}]
    },  
    {path:'servers',
      canActivateChild:[authRoutingGuardService], 
      component:ServersComponent, 
      children:[
        {path:':id', component:ServerComponent, resolve:[serverResolver]},
        {path:':id/edit', component:EditServerComponent, canDeactivate:[CanDeactivateGuard], resolve:[serverResolver]}
      ]},
      {path:'pageNotFound', component:ErrorPageComponent,data:{msg:"Page Not Found"}},
      {path:'**', redirectTo:'/pageNotFound'}
  ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class routingAppModule{
    
}