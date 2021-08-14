import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'sc-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  public results: any[];

  constructor(
    private readonly companiesService: CompaniesService,
  ) { }

  public async ngOnInit() {
    this.results = await this.companiesService.list();
    this.results = this.results.concat(this.results);
    this.results = this.results.concat(this.results);
  }
}
