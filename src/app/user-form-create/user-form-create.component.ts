import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { UserViewComponent } from '../user-view/user-view.component';
import { DistrictViewModel } from '../ViewModel/districtViewModel';
import { UserViewModel } from '../ViewModel/userViewModel';

@Component({
  selector: 'app-user-form-create',
  templateUrl: './user-form-create.component.html',
  styleUrls: ['./user-form-create.component.css']
})
export class UserFormCreateComponent implements OnInit {

  userList: UserViewModel[]=[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser():void{
    this.userService.getUserFromServer().subscribe(x => this.userList = x);
  }

  newUser : UserViewModel;

  public createForm = new FormGroup(
    {
      name :new FormControl(''),
      phoneNumber :new FormControl(''),
      adress: new FormGroup({
        city :new FormControl(''),
        district :new FormControl('')
      })
    }
  )

  add(user : UserViewModel):void
  {
    user.name = this.createForm.value.name;
    user.city = this.createForm.value.city;
    // user.phoneNumber = this.createForm.value.phoneNumber;
    // user.district = this.createForm.value.district;
    this.userService.addUser(user).subscribe(user => {this.userList.push(user)});
  }
}
