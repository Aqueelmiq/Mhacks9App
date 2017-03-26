import { Injectable } from '@angular/core';
import {Stock} from "../models/Stock";
import {Http} from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  memes: Stock[] = [
    new Stock("Dank Meme", "https://fthmb.tqn.com/uMGI5iu-pe9YaxocWZGUiBRD1Z4=/400x250/filters:no_upscale()/about/meme-baby1-580700253df78cbc28b1b442.PNG"),
    new Stock("Harambe", "http://cbsnews1.cbsistatic.com/hub/i/2016/06/01/be84a529-4da6-4981-b3d8-306f852e5001/133086105858279649186878551590185511304691o.jpg"),
    new Stock("Pepe The Frog", "http://www.trbimg.com/img-57fd09fa/turbine/la-na-pol-pepe-the-frog-hate-symbol-20161011-snap"),
    new Stock("Nyan Cat", "https://fthmb.tqn.com/uMGI5iu-pe9YaxocWZGUiBRD1Z4=/400x250/filters:no_upscale()/about/meme-baby1-580700253df78cbc28b1b442.PNG"),
    new Stock("Haters Gonna Hate", "https://fthmb.tqn.com/uMGI5iu-pe9YaxocWZGUiBRD1Z4=/400x250/filters:no_upscale()/about/meme-baby1-580700253df78cbc28b1b442.PNG"),
    new Stock("Harlem Shake", "https://fthmb.tqn.com/uMGI5iu-pe9YaxocWZGUiBRD1Z4=/400x250/filters:no_upscale()/about/meme-baby1-580700253df78cbc28b1b442.PNG"),
    new Stock("Troll Face", "https://fthmb.tqn.com/uMGI5iu-pe9YaxocWZGUiBRD1Z4=/400x250/filters:no_upscale()/about/meme-baby1-580700253df78cbc28b1b442.PNG"),
    new Stock("Salt Bae", "https://fthmb.tqn.com/uMGI5iu-pe9YaxocWZGUiBRD1Z4=/400x250/filters:no_upscale()/about/meme-baby1-580700253df78cbc28b1b442.PNG")
  ]

  data = [
    'Oh No Baby! What Is You Doin???',
    'Roll Safe',
    'Forever Alone',
    "Arthur's Fist",
    'Cash Me Ousside Howbow Dah',
    'fap-guy',
    'Doge',
    'Me Gusta',
    'Trollface Coolface Problem?',
    'First Day on the Internet Kid',
    'Yao Ming Face / Bitch Please',
    'Neil deGrasse Tyson Reaction',
    '"Y U NO" Guy',
    'Overly Attached Girlfriend',
    'Scumbag Steve',
    "You Don't Say?",
    'NO. Rage Face',
    'Pepe the Frog',
    'philosoraptor',
    'Bad Luck Brian',
    'The Most Interesting Man in the World',
    'ick Butt',
    'pedobear',
    'Challenge Accepted',
    'Xzibit Yo Dawg',
    'Oh Crap OMG Rage Face',
    'If You Know What I Mean',
    'Socially Awkward Penguin',
    'Futurama Fry Not Sure If',
    'True Story',
    'Sweet Brown Aint Nobody Got Time for That',
    'impossibru',
    "I Don't Want to Live on This Planet Anymore",
    'Success Kid I Hate Sandcastles',
    'genius',
    'Yes, This is Dog',
    'Poker Face',
    'Oh God Why',
    'Conspiracy Keanu',
    'College Freshman',
    'College Liberal',
    'Feel Like a Sir',
    'Condescending Wonka Creepy Wonka',
    'Trash Doves',
    'Unhelpful High School Teacher',
    'Confused Black Girl',
    'Imminent Ned Brace Yourselves, Winter is Coming',
    'McKayla is Not Impressed',
    'Anti-Joke Chicken',
    'harambe the gorilla',
    'Awkward Moment Seal',
    'Third World Success'
  ];

  uri = 'http://localhost:3000/api/';

  constructor(public http: Http) {
    this.loadMemes()
  }

  getMemes(keyword: string): Stock[] {
    return this.memes.filter((val) => {
      if (val.name.toLowerCase().includes(keyword.toLowerCase()))
        return true;
    });
  }

  loadMemes() {
    this.data.forEach((val) => {
      let x = this.uri + encodeURIComponent(val.trim());
      this.http.get(x, {})
        .map((res) => {
          return res.json();
        }).subscribe((data) => {
          this.memes.push(new Stock(data['name'], data["img_url"]));
        });
    });
  }

}
