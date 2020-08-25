import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatisaltideaPage } from './whatisaltidea.page';

describe('WhatisaltideaPage', () => {
  let component: WhatisaltideaPage;
  let fixture: ComponentFixture<WhatisaltideaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatisaltideaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatisaltideaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
