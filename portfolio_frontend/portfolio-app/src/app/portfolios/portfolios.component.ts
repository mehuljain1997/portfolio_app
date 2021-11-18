import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfoliosService } from 'src/portfolios.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  portfolios:any
  searchedKeyword: string;

  constructor(private router:Router,private portfolioservice:PortfoliosService) { }

  ngOnInit(): void {
   this.findPortfolios()
  }


  findPortfolios(){
    this.portfolioservice.getPortfolios().subscribe((res:any) => {
      this.portfolios = res.data
    })

  }

  transactional(id){
    this.router.navigate(['/transactional',id])
  }


}
