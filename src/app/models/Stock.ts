export class Stock {

  name: string;
  current_price: number;
  change: number;
  opening: number;
  cap: number;
  year_high: number;
  year_low: number;
  img_url: string;

  constructor(name:string, image:string) {
    this.name = name;
    this.img_url = image;
  }

}
