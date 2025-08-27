import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectShowcaseComponent } from './single-project-showcase.component';

describe('SingleProjectShowcaseComponent', () => {
  let component: SingleProjectShowcaseComponent;
  let fixture: ComponentFixture<SingleProjectShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProjectShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
