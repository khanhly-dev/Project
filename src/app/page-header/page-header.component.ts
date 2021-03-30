import { Component, Input, OnInit, TemplateRef } from '@angular/core';


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

  @Input() subTittle : TemplateRef<any>;
}
