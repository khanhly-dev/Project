import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CityComponent } from '../city/city.component';
import { GetDataServiceService } from '../Service/get-data-service.service';
import { UserService } from '../Service/user.service';
import { UserViewComponent } from '../user-view/user-view.component';
import { CityViewModel } from '../ViewModel/cityViewModel';
import { DistrictViewModel } from '../ViewModel/districtViewModel';
import { UserViewModel } from '../ViewModel/userViewModel';

@Component({
  selector: 'app-user-form-create',
  templateUrl: './user-form-create.component.html',
  styleUrls: ['./user-form-create.component.css']
})
export class UserFormCreateComponent implements OnInit {

  userList: UserViewModel[] = [];
  constructor(private userService: UserService, private getDataService : GetDataServiceService) { }

  ngOnInit(): void {
    this.getAllUser();
    this.getAllCity();
  }

  getAllUser(): void {
    this.userService.getUserFromServer().subscribe(x => this.userList = x);
  }

  newUser: UserViewModel;


  public createForm = new FormGroup(
    {
      name: new FormControl(''),
      phoneNumber: new FormControl(''),
      city: new FormControl(''),
      district: new FormControl('')
    }
  )

  add(user: UserViewModel): void {
    user.name = this.createForm.value.name;
    user.phoneNumber = this.createForm.value.phoneNumber;
    user.city = this.createForm.value.city;
    user.district = this.createForm.value.district;
    this.userService.addUser(user).subscribe(user => { this.userList.push(user) });
  }

  cityList : CityViewModel[] = [];

  getCityId : number = 1

  getAllCity()
  {
    this.getDataService.getCityFromServer().subscribe(x => this.cityList = x)
  }

  onCityChange()
  {
    for(let i of this.cityList)
    {
      if(this.createForm.value.city === i.name)
      {
        this.getCityId = i.id
      }
    }
  }
}
