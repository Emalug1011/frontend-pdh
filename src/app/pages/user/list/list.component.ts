import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
declare var $;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public errorState: boolean = false;
  public closeResult: string = '';
  public listUsers = [
    {
      code: 'PDH-01',
      user: 'BAGOMEZ',
      name: 'Benamin Abraha',
      lastname: 'Gomez Castillo',
      dependency: 'DT',
      position: 'Tecnico 1',
      profile: 'Recepcion',
      email: 'bgmez@pdh.con.gt',
      state: 'Activo',
      auxiliary: 'Zona 1 Guatemala'
    },
    {
      code: 'PDH-02',
      user: 'BAGOMEZ',
      name: 'Benamin Abraha',
      lastname: 'Gomez Castillo',
      dependency: 'DT',
      position: 'Tecnico 1',
      profile: 'Recepcion',
      email: 'bgmez@pdh.con.gt',
      state: 'Activo',
      auxiliary: 'Peten Central'
    }
  ];



  constructor(private modalService: NgbModal,) {
  }

  ngOnInit() { }

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
