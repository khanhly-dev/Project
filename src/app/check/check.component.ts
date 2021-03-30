import { forwardRef, Provider } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckComponent),
  multi: true
};

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [provider]
})
export class CheckComponent implements OnInit, ControlValueAccessor  {

  constructor() { }

  ngOnInit(): void {
  }

  private _checked = false;
  @Input()
  get checked() {
    return this._checked;
  }
  set checked(v: any) {
    if (v === false || v === 'false') {
      this._checked = false;
    } else {
      this._checked = true;
    }

  }

  private _readonly = false;
  @Input()
  get readonly() {
    return this._readonly;
  }
  set readonly(v: any) {
    if (v === false || v === 'false') {
      this._readonly = false;
    } else {
      this._readonly = true;
    }

  }

  onChange = (v: boolean) => { };
  onTouched = () => { };


  toggleChecked() {
    if (this._readonly) {
      return;
    }
    this._checked = !this._checked;
    this.onChange(this._checked);
    this.onTouched();
  }

  //control value accessor
  writeValue(value: any) {
    this.checked = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.readonly = isDisabled;
  }
}
