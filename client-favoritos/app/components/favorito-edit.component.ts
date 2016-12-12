import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoritoService } from '../services/favorito.service';
import { Favorito } from '../models/favorito'; 


@Component({
    selector: 'favorito-edit',
    templateUrl: 'app/views/favorito-add.html',
    providers: [FavoritoService]
})

export class FavoritoEditComponent implements OnInit {

   public titleSection: string;
   public favorito: Favorito; 
   public errorMessage: any;
    
    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
       this.titleSection = "Editar favorito";

    }

    ngOnInit(){
       this.favorito = new Favorito("","","","");
       // actualizamos el favorito con el favorito cuyo id está en la url
       this.getFavorito();

    }

    getFavorito(){
        this._route.params.forEach((params: Params) => {
                    let id = params['id'];

                    this._favoritoService.getFavorito(id).subscribe(
                        response =>{
                            this.favorito = response.favorito; // Objeto que nos llega de la api

                            if(!this.favorito){
                                this._router.navigate(['/']);
                            }
                        },
                        error =>{
                            this.errorMessage = <any>error;

                            if(this.errorMessage != null){
                                console.log(this.errorMessage);
                                console.log('Error en la petición');
                            }
                        
                        }
                    ); 
                })
    }


    public onSubmit(){
        
         this._route.params.forEach((params: Params) => {
            let id = params['id'];
   
            this._favoritoService.editFavorito(id, this.favorito).subscribe(
                response => {
                    if(!response.favorito){
                        alert('Error en el servidor');
                    }else{
                        this.favorito = response.favorito;
                        this._router.navigate(['/marcador', this.favorito._id]);
                    }
                },
                error => {
                    this.errorMessage = <any>error;

                    if(this.errorMessage != null){
                        //alert(this.errorMessage);
                        console.log(this.errorMessage);
                        console.log('Error en la petición');
                    }
                }
            );
      });
    }
}