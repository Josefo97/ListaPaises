import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisModel } from 'src/app/models/pais.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  terminoBusqueda: string = '';
  buscarCapital: string = '';
  buscarPor: number;
  buscarRegion: string;
  
  listaPaises: PaisModel[] = [];
  catBusqueda = [
    { id: 1, valor: 'Region' },
    { id: 2, valor: 'País' },
    { id: 3, valor: 'Capital' },
    
  ]
  catRegiones = [
    { id: 'Africa',   valor: 'Africa' },
    { id: 'Americas', valor: 'Americas' },
    { id: 'Asia',     valor: 'Asia' },
    { id: 'Europe',   valor: 'Europe' },
    { id: 'Oceania',  valor: 'Oceania' }, 
  ];

  constructor( private _paisesSrv: PaisesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  search(valor: string){
    if(!valor) return this.obtenerPaises();
    this._paisesSrv.paisPorNombre(valor).subscribe(rsp => this.listaPaises = rsp);
  }

  obtenerPaises(){
    this._paisesSrv.obtenerPaises().subscribe( rsp => this.listaPaises = rsp );
  }
  
  busuquedaPorCapital(capital: string){
    if(!capital) return;
    this._paisesSrv.paisPorCapital(capital).subscribe( rsp => this.listaPaises = rsp );
  }

  busquedaPorRegion(region){
    if(!region) return;
    this._paisesSrv.paisPorRegion(region).subscribe( rsp => this.listaPaises = rsp );
  }

  verPais(codigo: string){
    if(!codigo) return;
    this.router.navigate( ['pais/', codigo] );
  }

}
