import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHokiComponent } from './list-hoki.component';

describe('ListHokiComponent', () => {
  let component: ListHokiComponent;
  let fixture: ComponentFixture<ListHokiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHokiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHokiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
