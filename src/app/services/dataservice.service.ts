import { Injectable } from '@angular/core';
import {Stock} from "../models/Stock";

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
  constructor() { }

  getMemes(keyword: string): Stock[] {
    return this.memes.filter((val) => {
      if(val.name.toLowerCase().includes(keyword.toLowerCase()))
        return true;
    });
  }

}
