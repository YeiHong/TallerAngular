import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

//Controlador

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Serie [] = [];
  promedio: number = 0;

  getSerieList(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.promedio = this.getPromedioSeries(this.series);
    });
  }

  getPromedioSeries(Serie: Serie[]):number{
    let avgSeasons: number = 0;
    this.series.forEach((serie)=>{
        avgSeasons = avgSeasons + serie.seasons;
    });
    return avgSeasons/this.series.length;
  }

  ngOnInit() {
    this.getSerieList();
  }

}
