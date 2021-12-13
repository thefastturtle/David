import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { AboutUSComponent } from './about-us.component';

describe('AboutUSComponent', () => {
  let component: AboutUSComponent;
  let fixture: ComponentFixture<AboutUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUSComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
