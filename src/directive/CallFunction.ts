import {Directive, ElementRef, Renderer, Renderer2, EventEmitter, Output, OnInit} from "@angular/core";
/**
 * Created by SYSTEM on 03/11/2017.
 */
@Directive({
  selector: '[callFunc]'
})
export class CallFunction implements OnInit{


  @Output() callFunc: EventEmitter<any> = new EventEmitter<any>();

  constructor(){}

  ngOnInit(): void {
    this.callFunc.emit('dummy');
  }
}
