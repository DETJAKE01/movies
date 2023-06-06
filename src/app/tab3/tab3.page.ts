import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';

import { AtorDetalhePage } from './../ator-detalhe/ator-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Kit Connor',
      idade: '19',
      classificacao: 9,
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dhDcqxc5llsRtQpwfdRKVjAefIy.jpg',
      obras: ['Heartstopper'],
      pagina: '/kit-connor',
      favorito: false
    },
    {
      nome: 'Margot Robbie',
      idade: '32',
      classificacao: 9,
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg',
      obras: ['Aves de rapina'],
      pagina: '/margot-robbie',
      favorito: false
    },
    {
      nome: 'Isabella Adjani',
      idade: '67',
      classificacao: 9,
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/waAtxlj2TizxEfc66hCWPPGi8Z1.jpg',
      obras: ['Possessão'],
      pagina: '/isabella-adjani',
      favorito: false
    },
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras)
  }

  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
