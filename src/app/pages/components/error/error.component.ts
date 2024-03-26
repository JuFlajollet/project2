import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {

  constructor(
    private olympicService: OlympicService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigateByUrl("/");
    this.olympicService.loadInitialData().pipe(take(1)).subscribe();
  }
}
