import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test01';
  obj;
  test = 'haha111'
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    let data: any = {
      a: 1,
    };
    this.obj = data;
    data.b = await this.getData();

    this.http.get('http://localhost:3000/list').subscribe(res => console.log(res))
  }

  async getData() {
    return this.http.get('assets/1.json').toPromise();
  }

  onClose(event){
    console.log(event)
  }
}
