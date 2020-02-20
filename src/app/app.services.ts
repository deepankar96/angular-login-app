import { department } from 'src/model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({providedIn:'root'})

export class DepartmentService{
    private departments:department[] = [];
    private postUpdated = new Subject<department[]>();

    getDepartment(){
        return [...this.departments];
    }

    getDepartmentListstner(){
        return this.postUpdated.asObservable();
    }

    addDepartment(recievedData:department){
        this.departments.push(recievedData);
        this.postUpdated.next([...this.departments]);
    }
}