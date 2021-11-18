import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfoliosService } from 'src/portfolios.service';

@Component({
  selector: 'app-transactionaldetail',
  templateUrl: './transactionaldetail.component.html',
  styleUrls: ['./transactionaldetail.component.css']
})
export class TransactionaldetailComponent implements OnInit {
  id:number
  transactionalDetail:any = []
  constructor(private router:Router , private activatedRoute: ActivatedRoute,private portfolioservice:PortfoliosService) { }

  ngOnInit(): void {
    this.id =parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.findTransactionalDetail(this.id)  
  }

  findTransactionalDetail(id){
    this.portfolioservice.getPortfolio(id , new Date()).subscribe((res)=> {
      this.transactionalDetail = res.data
    })
  }

  fetchByDate(date){
    this.portfolioservice.getPortfolio(this.id ,date).subscribe((res)=> {
      this.transactionalDetail = res.data
    })

  }

  homePage(){
    this.router.navigate(['/'])
  }


}
