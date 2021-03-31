import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { CityViewModel } from '../ViewModel/cityViewModel';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DistrictViewModel } from '../ViewModel/districtViewModel';
declare var $ :any
const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ShowDataComponent),
  multi: true
};

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
  providers: [provider]
})
export class ShowDataComponent implements OnInit, ControlValueAccessor {

  cityList : CityViewModel[] = [];

  cityFilterList: Observable<CityViewModel[]>;
  private searchTerms = new Subject<string>();


  constructor(private getDataService : GetDataServiceService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.getAllCity();
    this.cityFilterList = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.getDataService.filterCity(term)),
    );
  }

  
  

  getAllCity():void{
    this.getDataService.getCityFromServer().subscribe(x => this.cityList = x)
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


  //an theo [(ngmodel)] cua template driven form
  writeValue(value: any) {
    this.readonly = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  //an theo disable cua formcontrol
  setDisabledState(isDisabled: boolean) {
    this.readonly = isDisabled;
  }
}
