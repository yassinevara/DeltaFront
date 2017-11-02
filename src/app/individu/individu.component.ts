import { Component, OnInit } from '@angular/core';
import {IndividuService} from "../../service/individu.service";
import {LazyLoadEvent} from "primeng/components/common/lazyloadevent";
import {RouterLink, Router} from "@angular/router";
import {Individu} from "../../model/Individu";


@Component({
  selector: 'app-individu',
  templateUrl: './individu.component.html',
  styleUrls: ['./individu.component.css']
})
export class IndividuComponent implements OnInit {
  pageIndividu:any=null;
  currentPage:number=0;
  motCle:string ="";
  size:number=10;
  pages:Array<number>;

  constructor(public individuService:IndividuService,
              public router:Router) { }

  ngOnInit() {
    this.chercher();
  }

  getIndividus(){
    this.individuService.getIndividus(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pageIndividu = data;
        this.pages = new Array (data.totalPages);
      },error=> {
        console.log(error);
      })
  }

  chercher(){
    this.getIndividus();
  }


  gotoPage(i:number){
    this.currentPage = i;
    this.getIndividus();
  }

  editIndividu(id:number){
    //changer la route
    //router transmet un tableau contien l route et l'id
    this.router.navigate(['/editIndividu',id]);
  }

  deleteIndividu(i:Individu){
    let confirm=window.confirm("Etes vous sure?")
    if(confirm==true){
      this.individuService.deleteIndividu(i.idIndividu)
        .subscribe(data=>{
          //supprimer l'individu du tableau par son index pour eviter le chargement de la liste
          this.pageIndividu.content.splice(
            this.pageIndividu.content.indexOf(i),1
          )
        },error=>{
          console.log(error)
        })
    }
    }

}
