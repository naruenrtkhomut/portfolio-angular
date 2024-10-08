import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIndexComponent } from './page-index.component';

describe('PageIndexComponent', () => {
  let component: PageIndexComponent;
  let fixture: ComponentFixture<PageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
