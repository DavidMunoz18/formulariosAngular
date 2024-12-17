import { Routes } from '@angular/router';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { Perfil2fbComponent } from './perfil2fb/perfil2fb.component';

export const routes: Routes = [
    { path: 'formulario1', component: FormDinamicoComponent  },
  { path: 'formulario2', component: PerfilUsuarioComponent },
  {path: 'formulario3', component: Perfil2fbComponent}
];
