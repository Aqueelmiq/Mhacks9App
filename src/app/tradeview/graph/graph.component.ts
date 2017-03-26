import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/dataservice.service";


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  name;
  stock;
  image;
  public lineChartData: Array<any> = [
    { data: [Math.ceil(Math.random()*121), Math.ceil(Math.random()*121), Math.ceil(Math.random()*121), Math.ceil(Math.random()*121), Math.ceil(Math.random()*121), Math.ceil(Math.random()*121), Math.ceil(Math.random()*121)], label: 'Series A'},
  ];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };


  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(22,22,177,0.2)',
      borderColor: 'rgba(148,22,22,1)',
      pointBackgroundColor: 'rgba(22,220,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(public routing: ActivatedRoute, public ds: DataService) {
    this.routing.params.subscribe(params => {
      this.name = params['name'];
      this.stock = this.ds.getMemes(this.name)[0];
      this.ds.loadData(this.name).subscribe((data) =>{
        var d = []
        for(var i=1; i<12; i++) {
          d.push(data[`m${i}`])
        }
        this.lineChartData[0].data = d;
        this.lineChartData[0].data.slice();
        console.log(this.lineChartData[0].data);
      })
    });
  }

  ngOnInit() {
    this.routing.params.subscribe(params => {
      this.name = params['name'];
      this.stock = this.ds.getMemes(this.name)[0];
      this.ds.loadData(this.name).subscribe((data) =>{
        var d = []
        for(var i=1; i<12; i++) {
          d.push(data[`m${i}`])
        }
        this.lineChartData[0].data = d;
        this.lineChartData[0].data.slice();
        console.log(this.lineChartData[0].data);
      })
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
