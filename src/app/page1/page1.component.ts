import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
    
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy'); 
  }

  handlerClick(){
    return true;
  }

}
