import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Esta URL contiene el listado de todos los usuarios del backend
  private baseURL = "http://localhost:8088/api/v1/usuarios";

  constructor(private httpClient: HttpClient) { }

  //Este metodo obtiene la lista de usuarios
  obtenerListaDeUsuarios(): Observable<Usuario[]> {
    //Observable es un patron de diseño
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }
  //este metodo nos sirve para registrar un empleado
  registrarUsuario(usuario:Usuario) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,usuario);
  }

}
