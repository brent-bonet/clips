import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsContainerComponent } from './tabs-container.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

describe('TabsContainerComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  @Component({
    template: `
      <app-tabs-component>
        <app-tab title="Tab 1">Tab 1</app-tab>
        <app-tab title="Tab 2">Tab 2</app-tab>
      </app-tabs-component>
    `,
  })
  class TestHostComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsContainerComponent, TabComponent, TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
