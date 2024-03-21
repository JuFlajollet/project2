import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympicCountrys$!: Observable<OlympicCountry[]>;

  public sumCountries!: number;
  public sumJOs!: number;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicCountrys$ = this.olympicService.getOlympics();

    this.olympicCountrys$.subscribe((olympicCountries: OlympicCountry[]) => {
      this.sumCountries = this.olympicService.sumCountries(olympicCountries);
      this.sumJOs = this.olympicService.sumJOs(olympicCountries);
    });
  }
}
