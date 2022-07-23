import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() {
    console.log("1. Constructor Only Once and First")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("2.Changes: when any changes occurs but not working with Reference Type Variables")
  }
  ngOnInit(): void {
    console.log("3.Called only once after OnChanges ")
  }
  ngDoCheck(): void {
    console.log("4.at First Run , It runs immediately after OnInit , but runs whenever OnChanges Run")
  }
  ngAfterContentInit(): void {
    console.log("5. Called Once , After DoCheck")
  }
  ngAfterContentChecked(): void {
    console.log("6. Called Once , After ngAfterContentInit and after every DoCheck")
  }
  ngAfterViewInit(): void {
    console.log("7. Called Once , After ngAfterContentChecked")
  }
  ngAfterViewChecked(): void {
    console.log("8. After ngAfterViewInit or after every ngAfterContentChecked")
  }

  ngOnDestrory(): void {
    console.log("9.Just Before Removing The Component from DOM ( Dissapearing )")

  }
}
