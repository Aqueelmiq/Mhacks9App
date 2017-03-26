export class Stock {

  name: string;
  total: number;
  current_percentage: number;
  current_price: number;
  peak_price: number;
  change: number;
  opening: number;
  cap: number;
  peak_month: string;
  peak_year: string;
  year_high: number;
  year_low: number;
  img_url: string;
  trend: Array<number> = [];
/**
  new Stock(data['name'], data['total'],
  data['current_percentage'], data["current_price"], data['peak_price'],
  data['peak_month'], data["peak_year"], data["year_high"], data["year_low"],
  data["img_url"]
));
 **/

  constructor(name:string, image:string) {
    this.name = name;
    this.img_url = image;
  }

}
