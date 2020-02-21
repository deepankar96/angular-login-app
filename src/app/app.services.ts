import { department } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})

export class DepartmentService{
    private departments:department[] = [];
    private postUpdated = new Subject<department[]>();
    numberofDepartments:number;
    get_dept = 'http://localhost:3000/api/department';
    constructor(private http:HttpClient){

    }

    getDepartment(){
        this.http.get<{message:string,post}>(this.get_dept).subscribe((postData)=>{
            this. departments = postData.post;
            this.postUpdated.next([...this.departments])
          }); 
    }

    getDepartmentListstner(){
        return this.postUpdated.asObservable();
    }

    addDepartment(recievedData:department){
        this.departments.push(recievedData);
        this.postUpdated.next([...this.departments]);
    }
}