import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmasSideMenuComponent } from './dmas-side-menu.component';
import { provideRouter } from '@angular/router';

describe('DmasSideMenuComponent', () => {
  let component: DmasSideMenuComponent;
  let fixture: ComponentFixture<DmasSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmasSideMenuComponent],
      providers:[
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmasSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when logout button is clicked', () => {
    spyOn(component.onSignIn,'emit');

    fixture.componentRef.setInput('isAuthenticated',false);

    fixture.detectChanges();

    const btnLogin = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;

    expect(btnLogin).toBeTruthy();

    btnLogin.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();

  });

  it('should call onSignOut when logout button is clicked', () => {
    spyOn(component.onSignOut,'emit');

    fixture.componentRef.setInput('isAuthenticated',true);

    fixture.detectChanges();

    const btnLogin = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;

    expect(btnLogin).toBeTruthy();

    btnLogin.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();

  });
});
