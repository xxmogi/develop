SineWave = function(context) {
  var that = this;
  this.x = 0;
  this._context = context;
//  this.bufSrc = context.createBufferSource();
  this.node = context.createJavaScriptNode(512,1,1);
  this.sample_rate = context.sampleRate;
  this.freq = 440.0;
  this.node.onaudioprocess = function (e) {
    that.process(e);
  };
};

SineWave.prototype.process = function(e) {
  var data = e.outputBuffer.getChannelData(0);
  for(var i = 0;i<data.length; ++i) {
    this.x++;
    data[i] = 0.5 * Math.sin(this.x /(44100.0 /( 2.0 * Math.PI * this.freq)));
  };
};

SineWave.prototype.play = function() {
 // this.bufSrc.noteOn(0);
 // this.bufSrc.connect(this.node);
  this.node.connect(this._context.destination);
};

SineWave.prototype.pause = function() {
  this.node.disconnect();
};

Modulator = function(context) {
  this.that = this;
  this.x = 0;
  this._context = context;
  this.node = context.createJavaScriptNode(512,1,1);
  this.sample_rate = context.sampleRate;
  this.freq=440.0;
  this.node.onaudioprocess = function (e) {
    that.process(e);
  };
};
