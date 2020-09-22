import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  annulPlan: any = [];
 
  private getPendingTaskCount = new BehaviorSubject(this.annulPlan);
  currentPendingTaskCount = this.getPendingTaskCount.asObservable();

  constructor(private http: HttpClient) { }

  updatePendingTaskCount(taskCount: any) {
    this.getPendingTaskCount.next(taskCount);
  }

//   getUsers() {
//     return this.http.get<any>('assets/userData.json')
//     .toPromise()
//     .then(res => <User[]>res.data)
//     .then(data => { return data; });

    
// }
getUsers(): Observable<any> {
  let baseUrl: string = 'assets/userData.json';
  return this.http.get(
      baseUrl,
  )
}
}
