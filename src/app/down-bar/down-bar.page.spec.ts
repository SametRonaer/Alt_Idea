import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownBarPage } from './down-bar.page';

describe('DownBarPage', () => {
  let component: DownBarPage;
  let fixture: ComponentFixture<DownBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
