import { Injectable } from '@angular/core';



@Injectable({providedIn:'root'})

export class DepartmentLoginService{

    private token:string;
    private collegeId:string;
    private departmentId:string;

    loginToDepartment(token:string,departmentId:string,collegeId:string){
        this.token = token;
        this.collegeId = collegeId;
        this.departmentId = departmentId;
    }

    getCollegeId(){
        return this.collegeId
    }

}