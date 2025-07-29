import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeaderMenuComponent } from './mobile-header-menu.component';

describe('MobileHeaderMenuComponent', () => {
  let component: MobileHeaderMenuComponent;
  let fixture: ComponentFixture<MobileHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileHeaderMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
