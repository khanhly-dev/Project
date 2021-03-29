import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  nav1: string = 'Home';
  nav2: string = 'Sản phẩm';
  nav3: string = 'Giải pháp';
  nav4: string = 'Dịch vụ';
}
