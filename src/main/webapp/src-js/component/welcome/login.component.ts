import{ Component } from '@angular/core'
@Component({
    templateUrl: '../../../html/view/welcome/login.html'
})
export class LoginComponent{
    highlight: object[];

    constructor(){
        //Lista de destaques
        this.highlight = [
                { "id": 0, "name": "Nome 1", "url": "idlab1", "img": "https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35.jpeg"},
                { "id": 1, "name": "Nome 1", "url": "idlab2", "img": "http://files2.ostagram.ru/uploads/style/image/430667/thumb_img_ad14b060bc.jpg" },
                { "id": 2, "name": "Nome 3", "url": "idlab3", "img": "http://files2.ostagram.ru/uploads/style/image/346024/thumb_img_1712174707.jpg" },
                { "id": 3, "name": "Nome 4", "url": "idlab4", "img": "https://www.theprintspace.co.uk/wp-content/uploads/2017/08/guide-header-img.png" },
                { "id": 4, "name": "Nome 5", "url": "idlab5", "img": "http://www.goshootindoors.com/wp-content/uploads/img-07.jpg" }
            ];
    }

    getHighlight(): object[]{
        return this.highlight;
    }
}