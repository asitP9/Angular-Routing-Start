import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
serverId:number;
  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //this.serverId=1;
     this.serverId=this.route.snapshot.params['id']?this.route.snapshot.params['id']:1;
    this.server = this.serversService.getServer(this.serverId);
    this.route.params.subscribe(
      (paramsTemp:Params)=>{
         this.server = this.serversService.getServer(+paramsTemp.id);
      }
    );
  }

  editServer(){
    // this.router.navigate(['servers',this.server.id,'edit']);
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'})
  }

}
