import { UserService } from '../Service/user.service';
import { UserViewModel } from '../ViewModel/userViewModel';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {

  userList : UserViewModel[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
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
    this.getAllUser()
  }

  //put
  saveUserBeforeUpdate(userEdit : UserViewModel):void{
    this.userService.updateUser(userEdit).subscribe();
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

  // onChange = (v: boolean) => { };
  // onTouched = () => { };


  // //an theo [(ngmodel)] cua template driven form
  // writeValue(value: any) {
  //   this.readonly = value;
  // }
  // registerOnChange(fn: any) {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: any) {
  //   this.onTouched = fn;
  // }

  // //an theo disable cua formcontrol
  // setDisabledState(isDisabled: boolean) {
  //   this.readonly = isDisabled;
  // }

}
