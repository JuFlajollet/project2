import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  olympicCountrys$!: Observable<OlympicCountry[]>;
  private destroy$!: Subject<boolean>;

  sumCountries!: number;
  sumJOs!: number;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.olympicCountrys$ = this.olympicService.getOlympics();

    this.olympicCountrys$.subscribe((olympicCountries: OlympicCountry[]) => {
      this.sumCountries = this.olympicService.sumCountries(olympicCountries);
      this.sumJOs = this.olympicService.sumJOs(olympicCountries);
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
