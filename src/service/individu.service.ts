import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Individu} from "../model/Individu";

@Injectable()
export class IndividuService {
  constructor(public http:Http){

  }
  getIndividus (motCle:string,page:number,size:number){
    console.log("sevice get individus")
    return this.http.get("http://localhost:8080/searchIndividus?nom="+motCle+"&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }

  getAllIndividu (){
    return this.http.get("http://localhost:8080/individus")
      .map(resp=>resp.json());
  }


  saveIndividu (individu:Individu){
    return this.http.post("http://localhost:8080/individus",individu)
      .map(resp=>resp.json());
  }

  getIndividu(id:number){
    return this.http.get("http://localhost:8080//individus/"+id)
      .map(resp=>resp.json());
  }
  updateIndividu(individu:Individu){
    return this.http.put("http://localhost:8080/individus/"+individu.idIndividu,individu)
      .map(resp=>resp.json());

  }

  deleteIndividu(id:number){
    return this.http.delete("http://localhost:8080/individus/"+id)
      .map(resp=>resp.json());
  }
}
