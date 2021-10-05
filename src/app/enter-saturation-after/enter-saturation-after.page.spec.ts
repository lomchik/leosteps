import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterSaturationAfterPage } from './enter-saturation-after.page';

describe('EnterSaturationAfterPage', () => {
  let component: EnterSaturationAfterPage;
  let fixture: ComponentFixture<EnterSaturationAfterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterSaturationAfterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterSaturationAfterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
