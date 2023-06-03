import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { from,Observable } from 'rxjs';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';




@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.css']
})
export class CrearNotaComponent implements OnInit{
  notaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private _notaService: NotaService){
    this.notaForm = this.fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required]
    })
  }

  ngOnInit(): void{

  }

  agregarNota(){
  

    const NOTA:Nota = {
      titulo: this.notaForm.get('titulo')?.value,
      contenido: this.notaForm.get('contenido')?.value,
    }

    console.log(NOTA);
    this._notaService.guardarNota(NOTA).subscribe(data => {
      next: this.router.navigate(['/']);
      error : this.notaForm.reset()
    })
    
  }
}
