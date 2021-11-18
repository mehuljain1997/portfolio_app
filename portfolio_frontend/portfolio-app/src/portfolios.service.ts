import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  constructor(private http: HttpClient) { }
  
  getPortfolios(): Observable<any>{  
    const headers = {'Authorization': 'bcb54192-fe46-4268-8fe0-5400445da1d5'}
    return this.http.get("http://localhost:3000/portfolios", {headers})
  }


  getPortfolio(id ,date):Observable<any> {
    const headers = {'Authorization': 'bcb54192-fe46-4268-8fe0-5400445da1d5'}
    return this.http.get("http://localhost:3000/portfolio/details/"+ id + '?date='+ date , {headers})
  }
  
}
