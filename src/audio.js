export { AudioOutput };

import { OutputConsole } from './console.js';

/***************************************************************************************************/
/***		AudioOutput class																	                                       ***/
/***																							                                               ***/
/***		@authors : Florian BENMAHDJOUB                										                       ***/
/***																							                                               ***/
/***		The AudioOutput class is used to play various sounds on the audio output    	 		       ***/
/***************************************************************************************************/
   
var outConsole = new OutputConsole('output-area');

class AudioOutput {
  constructor() {
    this.audio = document.getElementById('audio-output');
  }
  
  /**
   * plays the selected audio file with the audio output
   * @param {string} filename the filename of the audio file to be played
   * @param {number} volume the volume at which the audio should be played (value between 0 and 100) (optional)
   * @param {number} type the type of file to play (currently recognizes "url" and "file" as valid types)
   */
  playAudio(filename, volume = 100, type) {
    this.audio.pause();
    this.audio.volume = volume/100;

    switch (type) {
      case "url":
        this.play(filename);
        break;

      case "file":
        this.play("./sounds/" + filename);
        break;

      default:
        outConsole.print("The file type " + type + " is not recognized as a valid type.");
        break;
    }
  }

  /**
   * plays the selected audio file with the audio output
   * @param {string} url the url of the audio file to be played
   */
   play(url) {
    this.audio.src = url;
    this.audio.play().catch(function() {
      outConsole.print("The file located at '" + url + "' couldn't be played. It either does not exist, or its access is restricted.");
    });
  }
}