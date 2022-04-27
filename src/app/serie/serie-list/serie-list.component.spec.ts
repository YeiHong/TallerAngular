/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { SerieListComponent } from './serie-list.component';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

describe('SerieListComponent', () => {
  let component: SerieListComponent;
  let fixture: ComponentFixture<SerieListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SerieListComponent ],
      providers: [SerieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListComponent);
    component = fixture.componentInstance;

    component.series = [
      new Serie(faker.datatype.number(), faker.name.jobTitle(), faker.company.companyName(), faker.datatype.number(), faker.lorem.paragraph(), faker.lorem.sentence(), faker.lorem.sentence())
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });
});
