import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHokiComponent } from './create-hoki.component';

describe('CreateHokiComponent', () => {
  let component: CreateHokiComponent;
  let fixture: ComponentFixture<CreateHokiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHokiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHokiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
