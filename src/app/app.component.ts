import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { ServiceService } from './service/service.service';
import { SolutionService } from './service/solution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(
    private productService: ProductService,
    private solutionService: SolutionService,
    private serviceService: ServiceService
  ){}

    tittle : string = 'Tittle'
    slogan :string = 'this is a suitable'
}
