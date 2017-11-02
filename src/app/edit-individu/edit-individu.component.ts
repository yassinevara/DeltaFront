import { Component, OnInit } from '@angular/core';
import {Individu} from "../../model/Individu";
import {ActivatedRoute, Router} from "@angular/router";
import {IndividuService} from "../../service/individu.service";

@Component({
  selector: 'app-edit-individu',
  templateUrl: './edit-individu.component.html',
  styleUrls: ['./edit-individu.component.css']
})
export class EditIndividuComponent implements OnInit {
  mode:number=1
  individu:Individu = new Individu();
  idIndividu:number;
  // activatedRoute service pour récuper l'id transmet par une route
  constructor(public activatedRoute:ActivatedRoute,
  public individuService:IndividuService,
  public router:Router) {
    console.log("id individu:"+this.activatedRoute.snapshot.params['id']);
    this.idIndividu=this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.individuService.getIndividu(this.idIndividu)
      .subscribe(data=>{
        this.individu=data;
      },error=>{
        console.log(error);
      })
  }

  updateIndividu(){
    this.individuService.updateIndividu(this.individu)
      .subscribe(data=>{
        console.log(data)
        alert("modification effectuée")
        this.mode=2;
        //this.router.navigate(['/listIndividu'])
      },error=>{
        alert("erreur modification")
      })

  }
}
