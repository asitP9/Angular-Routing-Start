import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router'
import { ServersService } from '../servers.service';
import { Observable } from 'rxjs';


export interface Server{
    id:number;
    name:string;
    status:string;
}
export class serverResolver implements Resolve<Server>{
    constructor(private serverService:ServersService){}
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Server>| Promise<Server>| Server{
        return this.serverService.getServer(route.params.id)
    }
}