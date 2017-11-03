import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserModel} from "../model/user.model";

/**
 * Classe criada para garantir a autenticidade dos dados do usuário.
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.1
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package services
 */
@Injectable()
export class AuthGuardService implements CanActivate {
    public static user: UserModel = null;
    public static loaded: boolean = false;
    public static token: string = null;

    /**
     * Construtor padrão da Classe
     *
     * @param {Router} router
     */
    constructor(private router: Router) { }

    /**
     * Verifica se o usuário possui uma chave de autenticação
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     */
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!AuthGuardService.loaded){
            AuthGuardService.user = AuthGuardService.getFromLocalStorage();
        }

        if (AuthGuardService.user != null) {
            //verifica se está logado e retorna true
            return true;
        }else{
            this.router.navigate(['/welcome/login'], { queryParams: { url: state.url }});
            return false
        }
    }

    /**
     * Carrega usuário salvo no Local Storage
     *
     * @returns {UserModel}
     */
    private static getFromLocalStorage(): UserModel | null {
        let user = localStorage.getItem('currentUser');
        AuthGuardService.loaded = true;

        if (user) {
            return UserModel.fromJson(JSON.parse(user));
        } else {
            return null;
        }
    }

    /**
     * Salva usuário no Local Storage
     *
     * @param {UserModel} user
     * @param {string} token
     */
    public static addToLocalStorage(user: UserModel, token: string): void{
        AuthGuardService.user = user;
        AuthGuardService.token = token;
        AuthGuardService.loaded = true;

        localStorage.setItem('currentUser', JSON.stringify(user.toJson()));
        localStorage.setItem('userToken', token);
    }

    /**
     * Remove o usuário do Local Storage
     */
    public static removeFromLocalStorage(): void{
        AuthGuardService.user = null;
        AuthGuardService.token = null;
        AuthGuardService.loaded = true;

        localStorage.removeItem("currentUser");
        localStorage.removeItem("userToken");
    }


}