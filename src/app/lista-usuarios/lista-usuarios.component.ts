import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  //En el constructor inyectamos
  constructor(
    private usuarioServicio: UsuarioService,
    private ruoter: Router) {

  }

  usuarios: Usuario[];

  ngOnInit(): void {
    /*this.usuarios = [{
      "id": 1,
      "nombre": "manu",
      "apellido": "mai",
      "telefono": "098888888",
      "email": "mai@hotmail.com",
      "password": "1111"

    },
    {
      "id": 2,
      "nombre": "manu 2",
      "apellido": "mai 2",
      "telefono": "098888888",
      "email": "mai2@hotmail.com",
      "password": "1111"
    }]*/
    this.obtenerUsarios();

  }
  private obtenerUsarios() {
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }

  eliminarUsuario(id: number) {
    this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
      console.log(dato);
      this.obtenerUsarios();
    });
  }
  verDetallesDelUsuario(id: number) {
    this.ruoter.navigate(['detalle-usuario',id]);
  }
  actualizarUsuario(id:number){
    this.ruoter.navigate(['actualizar-usuario',id]);
  }
}
