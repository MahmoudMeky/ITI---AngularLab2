import { Component, ContentChildren, OnInit, QueryList, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }
  @ContentChildren("country") countries!: QueryList<ElementRef>;

  @ContentChild("age") age!: ElementRef

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.countries.forEach((el) => {
      (el.nativeElement as HTMLHeadingElement).style.color = "red"
    });

    (this.age.nativeElement as HTMLHeadingElement).style.backgroundColor="gray"

  }


}
