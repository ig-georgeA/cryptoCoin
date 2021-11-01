import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxIconModule } from 'igniteui-angular';
import { CardViewALTComponent } from './card-view-alt.component';

describe('CardViewALTComponent', () => {
  let component: CardViewALTComponent;
  let fixture: ComponentFixture<CardViewALTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewALTComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewALTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
