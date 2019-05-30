import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>; // Para acceder a todos los componentes de la aplicación
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // Creamos una nueva instancia de nuestro AppComponent
    component = fixture.debugElement.componentInstance; // Almaceno en fixture una instancia del componente antes de cada prueba
  });

  // Unit testing for router-outlet
  it('Should have a router outlet', () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet)); 
    // Hacemos el query mediante By para verificar la existencia de la directiva RouterOutlet
    expect(debugElement).not.toBeNull();
  });
});
