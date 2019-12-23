import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    
  }

  reloadPage(){
    // this below line tells us that unlike applicationCache.module where we already specify the relative 
    //   paths and component and in component .html when we write servers instead of /this.servers, it take 
    //   relative path and gives us error. but in typescript though its present in a particular component still its cant figure
    //    out where it should start from. So we add relative To to let know the component from where to start from

    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
