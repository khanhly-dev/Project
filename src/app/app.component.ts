import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

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
