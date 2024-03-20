import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  olympicCountry$!: Observable<OlympicCountry>;
  sumParticipations!: number;
  sumMedals!: number;
  sumAthletes!: number;

  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const country: string = this.route.snapshot.params['country'];
    this.olympicCountry$ = this.olympicService.getOlympicCountryByCountry(country);
    this.olympicCountry$.subscribe((olympicCountry: OlympicCountry) => {
      this.sumParticipations = this.olympicService.sumParticipations(olympicCountry.participations);
      this.sumMedals = this.olympicService.sumMedals(olympicCountry.participations);
      this.sumAthletes = this.olympicService.sumAthletes(olympicCountry.participations);
    });
  }

  onClick(): void {
    this.router.navigateByUrl("/");
  }

}
