import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {
  listNotas: Nota[] = [];

  constructor(private _notaService: NotaService){

  }


  ngOnInit(): void {
      this.obtenerNotas();
  }

  obtenerNotas(){
    this._notaService.getNotas().subscribe(data => {
      console.log(data);
      this.listNotas = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarNota(id: any){
    this._notaService.eliminarNota(id).subscribe(data => {
      next: this.obtenerNotas();
      error: console.log('Ocurrio un error al borrar');
    })
  }

}
