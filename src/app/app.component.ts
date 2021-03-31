import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'project';
  // @ViewChild('testEl') testEl: ElementRef;

  // test1(){
  // document.getElementsByClassName('test');
  //     console.log(document.getElementsByClassName('test'))
  // }
  // test2(){
  //   console.log(this.testEl.nativeElement);
  // }

  constructor(
  ) { }

  tittle: string = 'Tittle'
  slogan: string = 'this is a suitable'


  checkActive = true;
  checkDisabled = false;
  checkControl = new FormControl(false);
  toggleControlDisable() {
    if (this.checkControl.disabled) {
      this.checkControl.enable();
    } else {
      this.checkControl.disable();
    }
  }


  dataDisable = false;
  dataControl = new FormControl(false);
  dataControlDisable() {
    if (this.dataControl.disabled) {
      this.dataControl.enable();
    } else {
      this.dataControl.disable();
    }
  }
}
