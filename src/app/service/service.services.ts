import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceService {
    public mobile:any={}; 
    constructor(private _http: HttpClient) { 

    }
}