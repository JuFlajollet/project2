import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { RouterModule, Routes } from '@angular/router';
import { MedalsByDatesLineChartComponent } from 'src/app/shared/components/medals-by-dates-line-chart/medals-by-dates-line-chart.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { NotFoundComponent } from '../not-found/not-found.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'error',
      component: ErrorComponent,
    },
    {
      path: 'notfound',
      component: NotFoundComponent,
    },
    {
      path: ':country',
      component: DetailComponent,
    },
    {
      path: '**', // wildcard
      redirectTo: 'notfound',
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [ 
        DetailComponent,
        LoadingSpinnerComponent,
        MedalsByDatesLineChartComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
