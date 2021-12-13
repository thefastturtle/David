import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { MenuMain2Component } from './menu-main2.component';

describe('MenuMain2Component', () => {
  let component: MenuMain2Component;
  let fixture: ComponentFixture<MenuMain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMain2Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
