import { Injectable } from '@angular/core';
import {Stock} from "../models/Stock";
import {Http} from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import {Meme} from "../models/Meme";

@Injectable()
export class DataService {

  api_key = "d55e22330f85142";
  base = "http://api.grepwords.com/lookup?apikey=";

  memes: Meme[] = []

  data = [{"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/022/508/C7S0ouqVAAANACj.jpg", "year_low": "11", "current_price": "59.86721242", "name": "'Oh No Baby! What Is You Doin???',", "year_high": "21"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/022/138/reece.JPG", "year_low": "571", "current_price": "152.7678866", "name": "'Roll Safe',", "year_high": "765"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/003/619/Untitled-1.jpg", "year_low": "124", "current_price": "194.3568506", "name": "'Forever Alone',", "year_high": "938"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/021/018/Ine1AkaF_400x400.jpg", "year_low": "112", "current_price": "541", "name": "'Arthur's Fist',", "year_high": "540"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/021/985/image.png", "year_low": "294", "current_price": "280.5759857", "name": "'Cash Me Ousside Howbow Dah',", "year_high": "882"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/005/939/Fap_Guy_Meme.png", "year_low": "632", "current_price": "338.2955129", "name": "'fap-guy',", "year_high": "670"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/013/564/aP2dv.gif", "year_low": "700", "current_price": "484.5389636", "name": "'Doge',", "year_high": "1020"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/002/252/me-gusta.jpg", "year_low": "524", "current_price": "169.2655997", "name": "'Me Gusta',", "year_high": "1052"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/000/091/cancer.png", "year_low": "128", "current_price": "265.5427116", "name": "'Trollface Coolface Problem?',", "year_high": "892"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/008/498/Kid.jpg", "year_low": "361", "current_price": "410.7347664", "name": "'First Day on the Internet Kid',", "year_high": "600"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/005/180/fuckthat.jpg", "year_low": "21", "current_price": "548.3429058", "name": "'Yao Ming Face / Bitch Please',", "year_high": "823"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/007/508/watch-out-we-got-a-badass-over-here-meme.png", "year_low": "145", "current_price": "315", "name": "'Neil deGrasse Tyson Reaction',", "year_high": "439"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/004/006/y-u-no-guy.jpg", "year_low": "532", "current_price": "178.9073803", "name": "'\"Y U NO\" Guy',", "year_high": "921"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/010/496/asdf.jpg", "year_low": "249", "current_price": "279.582514", "name": "'Overly Attached Girlfriend',", "year_high": "1027"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/004/856/hey-bro-scumbag-steve.jpg", "year_low": "72", "current_price": "419.8459635", "name": "'Scumbag Steve',", "year_high": "651"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/007/666/_57c8a1a431a592af806925e57258202f.png", "year_low": "328", "current_price": "208.7363348", "name": "'You Don't Say?',", "year_high": "571"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/007/423/untitle.JPG", "year_low": "314", "current_price": "320.1045612", "name": "'NO. Rage Face',", "year_high": "651"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/017/618/pepe-the-frog.jpg", "year_low": "303", "current_price": "197.5529162", "name": "'Pepe the Frog',", "year_high": "701"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/000/106/V3plvX2eRk6w77gwaWQCRDCro1_500_c.jpg", "year_low": "478", "current_price": "221.5915386", "name": "'philosoraptor',", "year_high": "651"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/009/515/blb.png", "year_low": "121", "current_price": "623.9022549", "name": "'Bad Luck Brian',", "year_high": "884"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/002/598/The-Most-Interesting-Man-in-the-World.jpg", "year_low": "136", "current_price": "403.2977516", "name": "'The Most Interesting Man in the World',", "year_high": "312"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/001/030/dickbutt.jpg", "year_low": "140", "current_price": "458.1491675", "name": "'ick Butt',", "year_high": "555"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/000/005/pedobear.jpg", "year_low": "155", "current_price": "193.5159097", "name": "'pedobear',", "year_high": "578"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/004/457/challenge.jpg", "year_low": "526", "current_price": "78.62453783", "name": "'Challenge Accepted',", "year_high": "628"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/000/048/800px-Sup_dawg.jpg", "year_low": "334", "current_price": "576.5873582", "name": "'Xzibit Yo Dawg',", "year_high": "985"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/004/077/Raisins_Face.jpg", "year_low": "392", "current_price": "403.3525551", "name": "'Oh Crap OMG Rage Face',", "year_high": "663"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/008/549/Naamloos-2.png", "year_low": "302", "current_price": "315.0751498", "name": "'If You Know What I Mean',", "year_high": "784"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/000/292/1245446936155.jpg", "year_low": "336", "current_price": "181.1498769", "name": "'Socially Awkward Penguin',", "year_high": "681"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/006/026/futuramafry.jpg", "year_low": "523", "current_price": "397.585064", "name": "'Futurama Fry Not Sure If',", "year_high": "667"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/006/216/7nTnr.png", "year_low": "503", "current_price": "356.6553135", "name": "'True Story',", "year_high": "925"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/009/827/SWEET-BROWN.jpg", "year_low": "140", "current_price": "427.4943479", "name": "'Sweet Brown Aint Nobody Got Time for That',", "year_high": "936"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/004/918/IMPOSSIBRU.JPG", "year_low": "323", "current_price": "473.8355655", "name": "'impossibru',", "year_high": "541"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/005/908/live.jpg", "year_low": "91", "current_price": "270.617029", "name": "'I Don't Want to Live on This Planet Anymore',", "year_high": "632"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/000/745/success-kid.jpg", "year_low": "12", "current_price": "233.1969021", "name": "'Success Kid I Hate Sandcastles',", "year_high": "558"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/010/277/069.jpg", "year_low": "12", "current_price": "12.9", "name": "'genius',", "year_high": "127"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/007/447/hello-yes-this-is-dog.png", "year_low": "56", "current_price": "339.5646393", "name": "'Yes, This is Dog',", "year_high": "662"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/003/193/1279052383758.jpg", "year_low": "13", "current_price": "109.0560653", "name": "'Poker Face',", "year_high": "324"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/006/482/template.jpg", "year_low": "113", "current_price": "521.4390803", "name": "'Oh God Why',", "year_high": "421"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/007/630/Conspiracy_Keanu_Serious_Shit_f8cc7a_2893052.jpg", "year_low": "3", "current_price": "606.2475985", "name": "'Conspiracy Keanu',", "year_high": "521"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/006/474/uber-frosh.jpg", "year_low": "112", "current_price": "113", "name": "'College Freshman',", "year_high": "208"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/008/067/COLLEGE-LIBERAL.jpg", "year_low": "110", "current_price": "229.1929995", "name": "'College Liberal',", "year_high": "600"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/006/550/feel-like-a-sir-template.jpg", "year_low": "14", "current_price": "417.5740171", "name": "'Feel Like a Sir',", "year_high": "523"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/008/320/3563wq.jpg", "year_low": "52", "current_price": "71", "name": "'Condescending Wonka Creepy Wonka',", "year_high": "145"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/022/212/trash_dove.png", "year_low": "12", "current_price": "466.3420101", "name": "'Trash Doves',", "year_high": "662"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/006/926/unhelpfulhsteacher.jpg", "year_low": "12", "current_price": "553.2617944", "name": "'Unhelpful High School Teacher',", "year_high": "421"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/015/802/10301534_638082642948194_6322103858659056259_n.jpg", "year_low": "220", "current_price": "166.9739619", "name": "'Confused Black Girl',", "year_high": "338"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/007/146/Imminent_Ned.gif", "year_low": "185", "current_price": "337.3924473", "name": "'Imminent Ned Brace Yourselves, Winter is Coming',", "year_high": "521"}, {"img_url": "http://i0.kym-cdn.com/entries/icons/original/000/011/057/unimpressed.PNG", "year_low": "35", "current_price": "350.4626929", "name": "'McKayla is Not Impressed',", "year_high": "503"}, {"img_url": "http://i1.kym-cdn.com/entries/icons/original/000/005/711/tumblr_ljfwtp6JZV1qhk4ito1_400.jpg", "year_low": "198", "current_price": "215", "name": "'Anti-Joke Chicken',", "year_high": "419"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/020/605/haram.JPG", "year_low": "211", "current_price": "169.1835781", "name": "'harambe the gorilla',", "year_high": "1080"}, {"img_url": "http://i2.kym-cdn.com/entries/icons/original/000/015/378/lttujcv.jpg", "year_low": "12", "current_price": "460.5789352", "name": "'Awkward Moment Seal',", "year_high": "612"}, {"img_url": "http://i3.kym-cdn.com/entries/icons/original/000/007/769/thirdworldsuccess.PNG", "year_low": "112", "current_price": "429.8232552", "name": "'Third World Success',", "year_high": "301"}]


  constructor(public http: Http) {
    this.data.forEach((data)=>{
      this.memes.push(new Meme( data["name"].slice(1,data["name"].length-2), data["img_url"], parseInt(data["year_high"]), parseInt(data["year_low"]), parseInt(data["current_price"])));
    })
  }

  getMemes(keyword: string): Meme[] {
    return this.memes.filter((val) => {
      if (val.name.toLowerCase().includes(keyword.toLowerCase()))
        return true;
    });
  }

  /**
  loadMemes() {
    this.data.forEach((val) => {
      let x = this.uri + encodeURIComponent(val.trim());
      this.http.get(x, {})
        .map((res) => {
          return res.json();
        }).subscribe((data) => {
          var stock = new Stock(data['name'], data["img_url"]);
          stock.cap = data['total'];
          stock.current_percentage = data['current_percentage'];
          stock.peak_price = data["peak_price"];
          stock.peak_month = data["peak_month"];
          stock.peak_year = data["peak_year"];
          stock.peak_month = data["peak_month"];
          stock.current_price = data["current_price"];
          stock.year_high = data["year_high"];
          stock.year_low = data["year_low"];
          this.memes.push(stock);
        });
    });
  }

  loadMeme(meme): Observable<any> {

  }
**/

  loadData(name) {
    let x = this.base + this.api_key +"&q=" + encodeURIComponent(name.trim());
    return this.http.get(x)
      .map((res) => {
        return res.json()[0];
      })
  }


  getDefaultMeme() {
    return new Meme("A", "a", 1, 2, 3);
  }
}
