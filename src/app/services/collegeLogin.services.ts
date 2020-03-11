import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})

export class CollegeLoginService{

    private token:string;
    private collegeId:string;

    loginTocollege(collegeId:string,token:string){
        this.token = "Bearer " + token,
        this.collegeId =collegeId
    }

    getCollegeId(){
        return this.collegeId
    }

    getToken(){
        return this.token
    }
}