import { routes } from './app-routing.module';
import { PinsComponent } from './components/pins/pins.component';
import { FormComponent } from './components/form/form.component';

fdescribe('App Routing', () => {
  it('Should have app path', () => {
    expect(routes[0].path).toBe('app'); // Verificar que la primera ruta sea app
    expect(routes[0].children).toContain({
      path: 'pins',
      component: PinsComponent
    });
    expect(routes[0].children).toContain({
      path: 'add',
      component: FormComponent
    });
    expect(routes[1].path).toBe(''); // Verificar que la primera ruta sea app
  });
});
