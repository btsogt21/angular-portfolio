import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaheerGifComponent } from './zaheer-gif.component';

describe('ZaheerGifComponent', () => {
  let component: ZaheerGifComponent;
  let fixture: ComponentFixture<ZaheerGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaheerGifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaheerGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
