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
        const currentTimeInDate = new Date()
        var currentTime = currentTimeInDate.getTime()
        var expireTime = parseInt(localStorage.getItem("expiresIn"))
        if(expireTime>=currentTime){
        this.collegeId = localStorage.getItem("collegeId")
        return this.collegeId
        }
    }

    getToken(){
        this.token = localStorage.getItem("token")
        return this.token
    }

    logout(){
        this.token = null
        this.collegeId = null
        this.removeToken()
    }

    private saveToken(){
        localStorage.setItem("token",this.token);
        localStorage.setItem("collegeId",this.collegeId);
        const expireTime = new Date()
        const expire = (expireTime.getTime() + 900000).toString();
        localStorage.setItem("expiresIn",expire)
        }

    private removeToken(){
        localStorage.removeItem("token")
        localStorage.removeItem("collegeId")
        localStorage.removeItem("expiresIn")
    }
}