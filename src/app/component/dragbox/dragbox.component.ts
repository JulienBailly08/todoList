import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dragbox',
  templateUrl: './dragbox.component.html',
  styleUrls: ['./dragbox.component.css']
})
export class DragboxComponent implements OnInit {
  
  @Input() todo:any;
  
  private x:number | any;
  private y:number | any;
  
  constructor() { }
  getLocalisationX(){
    return('PLop plop plop');
  }
  getLocalisationY(){

  }
  onSelection(){
    console.log(this.getLocalisationX());
  }

  ngOnInit(): void {
  }

}
