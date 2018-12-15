import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  post: {
    userName: string,
    message: string,
    createdDate: any
  };
  message: string;

  posts: { userName: string, message: string, createdDate: any }[]
    = [
      {
        userName: 'Taro Yamada',
        message: 'これはテストメッセージです',
        createdDate: '10分前'
      },
      {
        userName: 'Jiro Suzuki',
        message: '２つ目のテストメッセージ',
        createdDate: '5分前'
      }
    ]

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  addPost() {
    // 入力されたメッセージを使って、投稿データを作成
    this.post = {
      userName: 'Akira Yanagihara',
      message: this.message,
      createdDate: '数秒前'
    };
    // 配列postsにpostを追加する
    this.posts.push(this.post);
    // 入力フィールドをからにする
    this.message = "";

  }

  presentPrompt(index: number) {
    let alert = this.alertCtrl.create({
      title: 'メッセージ編集',
      inputs: [
        {
          name: 'message',
          placeholder: 'メッセージ'
        }
      ],
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            console.log('キャンセルが選択されました');
          }
        },
        {
          text: '更新',
          handler: data => {
            console.log(data);
            this.posts[index].message = data.message;
          }
        }
      ]
    });
    alert.present();
  }

  deletePost(index: number) {
    this.posts.splice(index, 1)
  }
}
