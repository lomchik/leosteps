import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterHeartRateAfterPage } from './enter-heart-rate-after.page';

describe('EnterHeartRateAfterPage', () => {
  let component: EnterHeartRateAfterPage;
  let fixture: ComponentFixture<EnterHeartRateAfterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterHeartRateAfterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterHeartRateAfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
