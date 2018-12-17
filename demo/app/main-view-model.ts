import { Observable } from 'tns-core-modules/data/observable';
import { Rootjail } from 'nativescript-rootjail';

export class HelloWorldModel extends Observable {
  public message: string;
  private rootjail: Rootjail;

  constructor() {
    super();

    this.rootjail = new Rootjail();
    this.message = this.rootjail.message;
  }
}
