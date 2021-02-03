import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-maintance-profile',
  templateUrl: './maintance-profile.component.html',
  styleUrls: ['./maintance-profile.component.scss']
})
export class MaintanceProfileComponent implements OnInit {
  public errorState: boolean = false;
  public closeResult: string = '';
  public profiles = [
    {
      code: "PDH-AD1",
      name: 'Administradores',
      description: 'Permisos completos a todas las opciones del sistema'
    },
    {
      code: "PDH-AD2",
      name: 'Recepción',
      description: 'Colaboradores que se encuentra en las recepciones'
    }
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /* manager modals */
  open(content, code) {
    this.modalService
      .open(content, { size: "xl", centered: false })
      .result.then(
        (result) => { this.closeResult = "Closed with: $result"; },
        (reason) => { this.closeResult = "Dismissed $this.getDismissReason(reason)"; }
      );
  }

  getDismissReason(reason: any) {
    this.modalService.dismissAll(reason);
  }

}
