import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  message : string;

  posts: { userName: string, message: string, createdDate: any}[]
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

  constructor(public navCtrl: NavController) {

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
}
