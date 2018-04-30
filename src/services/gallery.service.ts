import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GalleryService {
 //resp: any;
  host: string = 'https://pixabay.com/api/';
  constructor(public http: HttpClient){}

  search(query: String, size: number, page: number): any {

  /*return this.http.get(this.host+"?key=8628314-ab80a552d9f2e4a8a26ba4edf&q="+query+"per_pages="+size+"&pages="+page).map(
      (response) => {
        response.toString();
      // this.resp = response.json()
      }
    );*/

  return this.http.get(this.host+"?key=8628314-ab80a552d9f2e4a8a26ba4edf&q="+query+"per_pages="+size+"&pages="+page);


   // return this.resp;
  }

}
