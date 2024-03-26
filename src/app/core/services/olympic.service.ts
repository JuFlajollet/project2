import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { OlympicCountry } from '../models/Olympic';
import { Participation } from '../models/Participation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<OlympicCountry[]>([]); 

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  loadInitialData(): Observable<OlympicCountry[]> {
    return this.http.get<OlympicCountry[]>(this.olympicUrl).pipe(
      tap((value: OlympicCountry[]) => this.olympics$.next(value)),
      catchError((error) => {
        console.error(`Error occurred while loading data.`);
        this.router.navigateByUrl("/error");
        throw error;
      })
    );
  }

  getOlympics(): Observable<OlympicCountry[]> {
    return this.olympics$.asObservable();
  }

  getOlympicCountryById(olympicCountryId: number): Observable<OlympicCountry> {
    return this.getOlympics().pipe(
      map((olympicCountries: OlympicCountry[]) => olympicCountries.filter(olympicCountry => olympicCountry.id === olympicCountryId)[0])
    );
  }

  getOlympicCountryByCountry(country: string): Observable<OlympicCountry> {
    return this.getOlympics().pipe(
      filter((olympicCountries: OlympicCountry[]) => olympicCountries.length > 0),
      map((olympicCountries: OlympicCountry[]) => olympicCountries.filter(olympicCountry => olympicCountry.country.localeCompare(country, undefined, { sensitivity: 'base' }) === 0)[0])
    );
  }

  sumCountries(olympicCountries: OlympicCountry[]): number {
    return olympicCountries.length;
  }

  sumMedals(participations: Participation[]): number {
    let totalMedals = 0;

    participations.forEach(
      (participation: Participation) => totalMedals += participation.medalsCount
    );

    return totalMedals;
  }

  sumAthletes(participations: Participation[]): number {
    let totalAthletes = 0;

    participations.forEach(
      (participation: Participation) => totalAthletes += participation.athleteCount
    );

    return totalAthletes;
  }

  sumParticipations(participations: Participation[]): number {
    return participations.length;
  }

  sumJOs(olympicCountries: OlympicCountry[]): number {
    const JOParticipations = new Map<string, number>();

    olympicCountries.flatMap(olympicCountry => olympicCountry.participations).forEach(
      (participation) => JOParticipations.set(participation.city, participation.year)
    );

    // Only take JO participations where both year and city are different
    const totalJOs = [...new Set(JOParticipations)];

    return totalJOs.length;
  }
}
