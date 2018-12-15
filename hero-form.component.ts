import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  model = new Hero(18,'','','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }
  //onSubmit() {
 //   this.http.post('http://someurl', JSON.stringify(this.data))
  //  .subscribe(...);
//}

  newHero() {
    this.model = new Hero(18,'','','','','','','');
  }
}