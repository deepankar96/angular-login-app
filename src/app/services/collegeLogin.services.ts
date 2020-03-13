import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})

export class CollegeLoginService{

    private token:string;
    private collegeId:string;

    loginTocollege(collegeId:string,token:string){
        this.token =token,
        this.collegeId =collegeId
        this.saveToken()
    }

    getCollegeId(){
        return this.collegeId
    }

    getToken(){
        return this.token
    }

    logout(){
        this.token = null
        this.collegeId = null
        this.removeToken()
    }

    private saveToken(){
        localStorage.setItem("token",this.token);
        localStorage.setItem("collegeId",this.collegeId)
    }

    private removeToken(){
        localStorage.removeItem("token")
        localStorage.removeItem("collegeId")
    }
}