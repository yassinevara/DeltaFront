import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Versement} from "../model/versement";

@Injectable()
export class VersementService {



  constructor(public http:Http){

  }

  saveVersement(versement:Versement){
    return this.http.post("http://localhost:8080/versements",versement)
      .map(resp=>resp.json());
  }

  getVersement(id:number){
    return this.http.get("http://localhost:8080/versements/"+id)
      .map(resp=>resp.json());
  }

  getVersementOfIndividu(id:number){
    return this.http.get("http://localhost:8080/versements/individus/"+id)
      .map(resp=>resp.json());
  }
}
