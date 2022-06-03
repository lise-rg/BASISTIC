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
   */
  playAudio(filename, volume = 100) {
    this.audio.pause();
    this.audio.volume = volume/100;
    this.audio.src = "./sounds/" + filename;
    this.audio.play().catch(function() {
      outConsole.print("The file " + filename + " couldn't be played. It either does not exist, or its access is restricted.");
    });
  }
}