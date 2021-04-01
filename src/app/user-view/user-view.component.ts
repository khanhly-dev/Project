import { UserService } from '../Service/user.service';
import { UserViewModel } from '../ViewModel/userViewModel';
import { Component, forwardRef, Input, OnChanges, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UserViewComponent),
  multi: true
};

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  providers: [provider]
})
export class UserViewComponent implements OnInit,OnChanges, ControlValueAccessor {

  userList : UserViewModel[] = [];

  user : UserViewModel;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  ngOnChanges():void
  {
    this.getAllUser();
  }

  editData()
  {
    this.readonly = !this.readonly
  }

  //get
  getAllUser():void{
    this.userService.getUserFromServer().subscribe(x => this.userList = x);
  }

  //delete
  deleteUser(user : UserViewModel):void
  {
    this.userService.deleteUser(user.id).subscribe();

  }

  //get by id
  getUserById(user : UserViewModel) :void
  {
    this.userService.getById(user.id).subscribe(x => this.user = x);
    this.editData();
  }

  //put
  saveUserBeforeUpdate():void{
    this.userService.updateUser(this.user).subscribe();
    this.editData();
  }

  
  private _readonly = true;
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
