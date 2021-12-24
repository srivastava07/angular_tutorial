import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {
    public serve:any=9;
getFullname(fname:any,lname:any){
    var fullName=fname + " " + lname;
return fullName;
}

}