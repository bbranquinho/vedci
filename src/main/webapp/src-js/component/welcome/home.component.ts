import {Component, OnInit} from '@angular/core'
import {UserModel} from "../../model/user.model";
import {AuthGuardService} from "../../service/auth-guard.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WelcomeHighlightModel} from "../../model/welcome-highlight.model";
import {TranslateService} from "@ngx-translate/core";
import {NotificationService} from "../../service/notification.service";
@Component({
    templateUrl: 'html/view/welcome/home.html',
    styleUrls: [
        'css/view/welcome/home.min.css',
        'node_modules/font-awesome/css/font-awesome.css'
    ]
})
export class HomeComponent implements OnInit{
    public bestSellerHighlights: WelcomeHighlightModel[] = [];
    public bestSellerRaking: WelcomeHighlightModel[] = [];

    public ngOnInit(): void {
        //Carrega a lista de destaque
        WelcomeHighlightModel.getHighlights().subscribe(highlights =>{
            highlights.map( (highlight : WelcomeHighlightModel) => {
                if(highlight.bestSeller){
                    this.bestSellerHighlights.push(highlight);
                }else{
                    this.bestSellerRaking.push(highlight)
                }
            });
        });
    }
}