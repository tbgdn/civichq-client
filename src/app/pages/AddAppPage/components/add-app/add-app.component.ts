import { Component, OnInit,Input } from '@angular/core';
import { AddAppService } from '../../services/add-app.service';
import { AppProfile } from './../../../../shared/models/app-profile.model';
import { AppDetails } from './../../../../shared/models/app-details.model';
import { NgoDetails } from './../../../../shared/models/ngo-details.model';

import './add-app.scss';


@Component({
    selector: 'add-app',
    providers: [AddAppService],
    templateUrl: './add-app.template.html',
})

export class AddAppComponent implements OnInit {
    @Input() app: AppProfile;
    public submitted: boolean;
    constructor(private addAppService: AddAppService){}

    ngOnInit() {
        this.app = new AppProfile();
        this.app.appdetail = new AppDetails();
        this.app.ngodetail = new NgoDetails();
    }
    addApp(){
        this.addAppService.addApp(this.app)
        .subscribe(
            app => console.log('app added')
        )
    }

}