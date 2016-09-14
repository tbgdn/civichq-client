import { Headers, RequestOptions, Http ,Response } from '@angular/http';
import { Injectable }     from '@angular/core';
import { BaseService} from "../../../services/base.service";
import { AppProfile } from '../../../shared/models/app-profile.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddAppService extends BaseService {
    constructor(private http:Http) {
        super(http)
    }

    addApp(app:AppProfile): Observable<AppProfile> {
        let body = JSON.stringify({app});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        console.log('in service',body)
        return this.http.post(this.rootAddress + '', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || {};
    }
}