import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { UserFormCreateComponent} from './user-form-create/user-form-create.component'
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path : 'user-create' , component : UserFormCreateComponent},
  {path : 'user-view' , component : UserViewComponent},
  {path : 'home' , component : PageHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
