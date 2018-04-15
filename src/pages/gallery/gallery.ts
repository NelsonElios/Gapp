import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toast, ToastController} from 'ionic-angular';
//import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {GalleryService} from "../../services/gallery.service";


/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motCle: string;
  size: number = 10;
  currentPage: number = 10;
  dataImages: any = {hits:[]};
  totalPages: number;
  toast: Toast;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCrtl: ToastController, public galleryService: GalleryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
    this.dataImages.hits = [];
    this.doSearch();
  }
  doSearch() {
     this.galleryService.search(this.motCle, this.size, this.currentPage).subscribe(
       (data) => {
         this.totalPages = data.totalHits / this.size;
         if(this.totalPages %  this.size != 0){
           ++this.totalPages;
         }

         data.hits.forEach(

           (hit) => {
                data.hits.push(hit);
             this.dataImages = data;

           }
         )

       },
     (error) => {
         console.log(error);

     }
     );



    /*this.http.get("https://pixabay.com/api/?key=8628314-ab80a552d9f2e4a8a26ba4edf&q="+this.motCle+"&image_type=photo&pretty=true").map(
        (resp)=>{
          resp.json()
        }
      ).subscribe(
      (data) => {
        this.toast = this.toastCrtl.create({
          message:'chargement des données',
          duration: 10000
        });

        this.dataImages = data;
        this.toast.present();
      },
    (error)=>{
        console.log(error);
    }
    );*/

  }

  doInfinite(infiniteScroll) {

    if(this.currentPage < this.totalPages){
      ++this.currentPage;
      //this.onSearch();
      this.doSearch();
    }
    infiniteScroll.complete(); //l'evenement qui permet de dire que la recherche est terminé pour l'affichage dans l'infinite scroll


  }
}
