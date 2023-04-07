import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceMediaService {
  constructor() {}

  getLocalStream(): Observable<MediaStream> {
    return new Observable((observer) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          observer.next(stream);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
  getListDevices(): Observable<any> {
    return new Observable((observer) => {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          observer.next(devices);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
