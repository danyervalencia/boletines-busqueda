import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable({ providedIn: 'root' })
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor() {}

    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
        const httpReq = req.clone({
            url: req.url.replace("http://", "https://")
        });
        return next.handle(httpReq);
    }

    /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        let request = req;
    
        if (token) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${ token }`
                }
            });
        }
    
        return next.handle(request);
    }*/
}