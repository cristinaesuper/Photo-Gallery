import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileRepository {
  private backendApi = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getImagesByUserId(userId: any){
    return this.http.get(`${this.backendApi}/images/${userId}`);
  }

  postImage(image: FormData) {
    return this.http.post(`${this.backendApi}/images`, image);
  }
}
