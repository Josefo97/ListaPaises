import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-escudo',
  templateUrl: './escudo.component.html',
  styleUrls: ['./escudo.component.css']
})
export class EscudoComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<EscudoComponent>,
                @Inject(MAT_DIALOG_DATA) public data,) { }

  ngOnInit(): void {
  }

}
