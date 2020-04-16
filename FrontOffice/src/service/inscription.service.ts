import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

 @Injectable()
export class InscriptionService {
users : any [] = [];

    URL = 'http://localhost:8080/apiAdminCategorie'


    constructor(private http:HttpClient){}


    
add(user){ 
    return this.http.post(this.URL+'/saveUtilisateur', user, {observe:'response'});
    }


}