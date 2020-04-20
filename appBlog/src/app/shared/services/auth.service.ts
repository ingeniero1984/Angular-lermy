import { Injectable } from '@angular/core';
import { UserInt } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth)
  {
    this.userData = afAuth.authState;
  }

  loginByEmail(user:UserInt)
  {
    const { email, password } = user;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout()
  {
    this.afAuth.auth.signOut();
  }
}
