import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
//import  swal  from 'sweetalert2';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  
  id:number;

  usuario:Usuario;

  constructor(private route:ActivatedRoute,private usuarioService:UsuarioService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];//obtengo el id de un parametro->id es de la ruta
    this.usuario = new Usuario();
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(dato => {
      this.usuario = dato;
      //swal(`Detalles del empleado ${this.usuario.nombre}`);
    });
  }
}
