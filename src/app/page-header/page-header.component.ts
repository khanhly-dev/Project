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

  productList: Product[] = [];
  serviceList: Service[] = [];
  solutionList: Solution[] = [];

  @Input() dropDown1;
  @Input() dropDown2;
  @Input() dropDown3;
  @Input() dropDown4;

  constructor(
    private productService: ProductService,
    private solutionService: SolutionService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getService();
    this.getSolution();
  }

  getProduct(): void {
    this.productService.getAllFroduct().subscribe(p => this.productList = p)
  }

  getSolution(): void {
    this.solutionService.getAllSolution().subscribe(s => this.solutionList = s)
  }

  getService(): void {
    this.serviceService.getAllService().subscribe(s => this.serviceList =s)
  }
}
