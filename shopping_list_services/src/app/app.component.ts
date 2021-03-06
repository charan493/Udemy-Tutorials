import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDFr9rdCKplg3G4adPt4bWx8zyT0o8VZ9M",
      authDomain: "max-data-ef033.firebaseio.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
