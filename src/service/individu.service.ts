import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class IndividuService {
  constructor(public http:Http){

  }
  getIndividus (motCle:string,page:number,size:number){

    return this.http.get("http://localhost:8080/searchIndividus?nom="+motCle+"&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
}
