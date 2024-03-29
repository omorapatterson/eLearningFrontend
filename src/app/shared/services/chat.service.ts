import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';
import {ISocketIOMessagePost, ISocketIOMessage} from '../../common/shared/models/messaging/ISocketIOMessage';
import {SocketIOEvent} from '../../common/shared/models/messaging/SoketIOEvent';


@Injectable()
export class ChatService {
  private socket;

  constructor() {
  }

  public initSocket(room: string): void {
    this.socket = socketIo({
      path: '/chat',
      query: {
        room: room,
        cookie: 'token'
      }
    });
  }


  public send(socketIOMessagePost: ISocketIOMessagePost): void {
    this.socket.emit(SocketIOEvent.MESSAGE, socketIOMessagePost);
  }

  public onMessage(): Observable<ISocketIOMessage> {
    return new Observable<ISocketIOMessage>(observer => {
      this.socket.on(SocketIOEvent.MESSAGE, (data: ISocketIOMessage) => observer.next(data));
    });
  }

  public onEvent(event: SocketIOEvent): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

}
