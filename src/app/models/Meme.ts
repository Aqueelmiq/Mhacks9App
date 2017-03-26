export class Meme {

  name: string;
  img_url: string;
  year_high: number;
  year_low: number;
  current_value: number;
  trends: Array<number> = [];

  constructor(name:string, image:string, year_high:number, year_low:number, current_value:number) {
    this.name = name;
    this.img_url = image;
    this.year_high = year_high;
    this.year_low = year_low;
    this.current_value = this.current_value;
  }

}
