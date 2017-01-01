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
      }, (error) => {
        alert('Error: ' + error.message)
      });
    } else {
      alert ("Sorry, your devices don't have support for this application. ;(");
    }
  }
}
