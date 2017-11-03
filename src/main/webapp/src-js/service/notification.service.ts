import { Injectable } from '@angular/core';


declare let UIkit: any;
/**
 * Classe responsavel por todas das notificações
 *
 * @author kamikaze <kamizaze@icefenix.com>
 * @version 1.0.0.0
 * @copyright EULA © 2017, IceFenix.com.
 * @access public
 * @package services
 */
@Injectable()
export class NotificationService {

    public static primary(message: string){
        UIkit.notification({message: message, status: 'primary', pos: 'top-center'})
    }


    public static success(message: string){
        UIkit.notification({message: message, status: 'success', pos: 'top-center'})
    }

    public static warning(message: string){
        UIkit.notification({message: message, status: 'warning', pos: 'top-center'})
    }

    public static danger(message: string){
        UIkit.notification({message: message, status: 'danger', pos: 'top-center'})
    }

}