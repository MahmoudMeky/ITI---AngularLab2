import { Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  personList = [{ "name": "Douglas Pace", "age": 35, "country": 'MARS' }, { "name": "Mcleod Mueller", "age": 32, "country": 'USA' }, { "name": "Day Meyers", "age": 21, "country": 'HK' }, { "name": "Aguirre Ellis", "age": 34, "country": 'UK' }, { "name": "Cook Tyson", "age": 32, "country": 'USA' }]
  
  @ViewChild("textplaceholder") divText!:ElementRef;

  changeText(text:any):void{
    (this.divText.nativeElement as HTMLDivElement).innerHTML=text;
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
