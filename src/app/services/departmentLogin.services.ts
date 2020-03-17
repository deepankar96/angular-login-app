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
        this.saveToken()
    }

    getCollegeId(){
        const currentTimeInDate = new Date()
        var currentTime = currentTimeInDate.getTime()
        var expireTime = parseInt(localStorage.getItem("expiresIn"))
        if(expireTime>=currentTime){
        this.collegeId = localStorage.getItem("collegeId")
        return this.collegeId
        }
    }
    getDepartmentId(){
        const currentTimeInDate = new Date()
        var currentTime = currentTimeInDate.getTime()
        var expireTime = parseInt(localStorage.getItem("expiresIn"))
        if(expireTime>=currentTime){
        this.departmentId = localStorage.getItem("departmentId")
        return this.departmentId
        }
    }

    private saveToken(){
        localStorage.setItem("token",this.token);
        localStorage.setItem("collegeId",this.collegeId);
        localStorage.setItem("departmentId",this.departmentId);
        const expireTime = new Date()
        const expire = (expireTime.getTime() + 43200000).toString();
        localStorage.setItem("expiresIn",expire)
        }

}