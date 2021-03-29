import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ServiceService } from '../service/service.service';
import { SolutionService } from '../service/solution.service';
import { Product } from '../viewModel/productViewModel';
import { Service } from '../viewModel/serviceViewModel';
import { Solution } from '../viewModel/solutionViewModel';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() slogan: string;
}
