import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dragbox',
  templateUrl: './dragbox.component.html',
  styleUrls: ['./dragbox.component.css']
})
export class DragboxComponent implements OnInit {


  @Input() todo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
