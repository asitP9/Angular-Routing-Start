import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { componentFactoryName } from '@angular/compiler';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  editServerPossible:boolean=false;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    // This below code will successfully retrieve the queryParams as well as fragment but its 
    // impossible to change it in case we are doing any navigation FROM THIS COMPONENT TO THIS COMPONENT.
    // So we can use observable in place of this too
    console.log(this.route.snapshot.queryParams, this.route.snapshot.fragment);

    this.route.params.subscribe(
      (serverRoute:Params)=>{
        this.server = this.serversService.getServer(serverRoute.id);
      });
    // this.server = this.serversService.getServer(this.route.snapshot);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.queryParams.subscribe(
      (queryParamTemp:Params)=>{
        this.editServerPossible=queryParamTemp.allowEdit==='1'?true:false;
      }
      );
    this.route.fragment.subscribe(
      (fragmentTemp:string)=>{console.log("This is fragment Temp from Subscribe", fragmentTemp)}
      );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }


}
