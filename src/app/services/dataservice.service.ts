import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  memes: string[] = ["Dank Meme",
    "harambe",
    "pepe the frog",
    "nyan cat",
    "troll face",
    "salt bae"
  ]
  constructor() { }

  getMemes(keyword: string) {
    return this.memes.filter((val) => {
      if(val.includes(keyword))
        return true;
    });
  }

}
