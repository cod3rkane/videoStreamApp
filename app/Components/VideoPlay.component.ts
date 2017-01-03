import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-play',
  templateUrl: './videoPlay.html',
  moduleId: module.id
})
export class VideoPlayComponent implements OnInit {

  ngOnInit() {
    let video = document.getElementById('videoPlay');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      let userMedia = navigator.mediaDevices.getUserMedia({ video: true, /*audio: true*/ });
      userMedia.then((stream) => {
        // Create the Blob URL
        video.setAttribute('src', window.URL.createObjectURL(stream));
        let ws = new WebSocket("ws://192.168.0.10:9002");
        ws.onopen = e => this.onOpen(e, ws);
        ws.onmessage = e => this.onMessage(e);
        ws.onclose = e => this.onClose(e);
      }, (error) => {
        alert('Error: ' + error.message)
      });
    } else {
      alert ("Sorry, your devices don't have support for this application. ;(");
    }
  }

  private onOpen(evt: Event, ws: WebSocket) {
    console.log(evt);
    ws.send("Hello, javascript sent this message!");
    setTimeout(() => {
      ws.send("By Cod3r Kane");
    }, 2000);
  }

  private onMessage(evt: Event) {
    console.log(evt);
  }

  private onClose(evt: Event) {
    console.log(evt);
  }
}
