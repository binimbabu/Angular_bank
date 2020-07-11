import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router){}
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((data:any)=>{},(err:any)=>{
            if(err instanceof HttpErrorResponse){
                if(err.status!=401){
                    return;
                }
                this.router.navigate([''])
            }
        }));
    }
}