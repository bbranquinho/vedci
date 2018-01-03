import {HttpFactory} from "../factory/http.factory";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

export class WelcomeHighlightModel{
    public id: number;
    public name: string;
    public url: string;
    public image: string;
    public price: string;
    public ranking: number;
    public voteQuantity: number;
    public bestSeller: boolean;



    constructor(id: number, name: string, url: string, image: string, price: number, ranking: number, voteQuantity: number, bestSeller: boolean){
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image || 'img/welcome/card-no-image.jpg';
        this.ranking = ranking;
        this.price = WelcomeHighlightModel.formatCurrency(price);
        this.voteQuantity = voteQuantity;
        this.bestSeller = bestSeller;
    }


    private static formatCurrency(price: number): string{
        return price.toFixed(2);
    }

    /**
     * Faz a requisição da lista de destaques
     *
     * @returns {Observable<any>}
     */
    public static getHighlights(): Observable<WelcomeHighlightModel[]>{
        return HttpFactory.createHttp().get(
            'welcome/highlight'
        ).map(result=> {
            return WelcomeHighlightModel.fromJson(result);
        });
    }

    /**
     * Retonra os campos em JSON
     *
     * @returns {any}
     */
    public toJson(): any{
        return {
            "id": this.id,
            "name": this.name,
            "url": this.url,
            "image": this.image
        }
    }


    /**
     * Cria instâncias de UserModel com base em um JSON
     * @param json
     * @returns any
     */
    public static fromJson(json: any): any {
        if(json instanceof Array){
            return json.map(json => new WelcomeHighlightModel(
                json.id,
                json.name,
                json.url,
                json.image,
                json.price,
                json.ranking,
                json.voteQuantity,
                json.bestSeller
            ));
        }else{
            return new WelcomeHighlightModel(
                json.id,
                json.name,
                json.url,
                json.image,
                json.price,
                json.ranking,
                json.voteQuantity,
                json.bestSeller
            );
        }
    }
}