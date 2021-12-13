import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { MenuMainComponent } from './menu-main.component';

describe('MenuMainComponent', () => {
  let component: MenuMainComponent;
  let fixture: ComponentFixture<MenuMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMainComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
