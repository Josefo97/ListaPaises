import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';
import { PaisModel } from '../../models/pais.model';
import { MatDialog } from '@angular/material/dialog';
import { EscudoComponent } from '../../modals/escudo/escudo.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const info = {
  data: null,
  height: "auto",
  width: "450px",
}

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: PaisModel;
  listaIdiomas: string[];

  unsubscribe$ = new Subject<boolean>();

  constructor( private activateRoute: ActivatedRoute,
               private _paisesSrv: PaisesService,
               private dialog: MatDialog ) { }

  ngOnInit(): void {
    const { id } = this.activateRoute.snapshot.params;
    this.obtenerPais(id);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  obtenerPais(id: string){
    this._paisesSrv.paisPorCodigo(id).subscribe( rspPais => {
      console.log('rspPais: ', rspPais);
      this.pais = rspPais[0];
      this.obtenerIdiomas(rspPais[0]);
    })
  }

  obtenerIdiomas(pais: PaisModel){
    const idiomas: string[] = Object.values(pais.languages);
    this.listaIdiomas = idiomas;
  }

  verEscudo(escudo){
    this.dialog.open(EscudoComponent, {
      ...info,
      data: escudo
    })
    .afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe();
  }

}
