import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path : 'usuarios',component:ListaUsuariosComponent},
  {path:'',redirectTo:'usuarios',pathMatch:'full'},
  {path : 'registrar-usuario',component : RegistrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
