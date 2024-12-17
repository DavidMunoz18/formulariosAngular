import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PerfilUsuarioComponent } from "./perfil-usuario/perfil-usuario.component";
import { Perfil2fbComponent } from "./perfil2fb/perfil2fb.component";
import { FormDinamicoComponent } from "./form-dinamico/form-dinamico.component";
import { MaterialModule } from './material/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, MaterialModule, RouterModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo-formulario';
  name = new FormControl('');
  apellido: string = '';

  updateName() {
    this.name.setValue('Nancy');
  }


}


