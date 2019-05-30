import { routes } from './app-routing.module';
import { PinsComponent } from './components/pins/pins.component';
import { FormComponent } from './components/form/form.component';

describe('App Routing', () => {
  beforeAll(() => {
    console.log('before all');
  });
  beforeEach(() => {
    console.log('before each');
  });
  afterAll(() => {
    console.log('after all');
  });
  afterEach(() => {
    console.log('after each');
  });
  it('Should have app path', () => {
    expect(routes[0].path).toBe('app'); // Verificar que la primera ruta sea app
    expect(routes[1].path).toBe(''); // Verificar que la primera ruta sea app
  });
  it('Should have null path', () => {
    expect(routes[1].path).toBe(''); // Verificar que la segunda ruta sea null
  });
  it('Should match the children', () => {
          expect(routes[0].children).toContain({
            path: 'pins',
            component: PinsComponent
          });
          expect(routes[0].children).toContain({
            path: 'add',
            component: FormComponent
          });
  });
});
