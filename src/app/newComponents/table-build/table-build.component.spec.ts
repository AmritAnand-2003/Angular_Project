import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBuildComponent } from './table-build.component';

describe('TableBuildComponent', () => {
  let component: TableBuildComponent;
  let fixture: ComponentFixture<TableBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
