import {Component, OnInit} from '@angular/core'
import {AuthGuardService} from "../../service/auth-guard.service";
@Component({
    templateUrl: '../../../html/view/welcome/logout.html'
})
export class LogoutComponent implements OnInit{

    /**
     * Chamado no início da função
     */
    public ngOnInit(): void{
        //Desloga
        AuthGuardService.removeFromLocalStorage();
    }
}