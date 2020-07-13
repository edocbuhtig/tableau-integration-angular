import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var tableau: any;
// The only compatible way to access tableau object in angular 2+

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements AfterViewInit {

  //Define the DOM element instance for tablaeu frame injection
  @ViewChild("vizContainer") vizContainer!: ElementRef;

  viz: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initViz();

  }

  initViz() { 
    const containerDiv = this.vizContainer.nativeElement;
    //Get the reference of DOM element that holds the tableau frame

    let url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
    let options = {
        hideTabs: true,
        onFirstInteractive: () => { 
        }
    }
    
    this.viz = new tableau.Viz(containerDiv, url, options)
  }

}
