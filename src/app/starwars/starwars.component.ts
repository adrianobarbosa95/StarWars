import { Component, OnInit } from '@angular/core';
import { PersonagemClass } from '../personagem-class';
import { PersonagensStarWarsService } from '../personagens-star-wars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
})
export class StarwarsComponent implements OnInit {
  public personagens: PersonagemClass[] = [];
  constructor(private _service: PersonagensStarWarsService) {}
  ngOnInit(): void {
    this._service.getPersonagens().subscribe((res) => {
      this.personagens = res;
    });
  }
}
