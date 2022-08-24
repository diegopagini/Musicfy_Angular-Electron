import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarUpdateComponent } from './avatar-update.component';

describe('AvatarUpdateComponent', () => {
  let component: AvatarUpdateComponent;
  let fixture: ComponentFixture<AvatarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
