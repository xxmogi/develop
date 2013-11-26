Controll = function(elem) {
  this.elem = elem;
  this.context = elem.getContext('2d');
  this.initConst();
  this.initStyle();

  this.context.lineWidth= 13.0;
  this.val = 0;
  this.initEvent();
  this.draw();
  console.log(elem.style.width +" " + this.height);
  console.log("width:"+this.width + " height:" + this.height);
};

/**
 * デフォルト値の初期化 TODO:あとでパラメータ化する
 */
Controll.prototype.initConst = function() {
  this.that = this;
  this.width = 100;
  this.height = 100;
  this.size = 40;
  /** value値 0.0 - 1.0 */
  this.value = 0.0;
  
};

Controll.prototype.initStyle = function (){
  this.max = 405;
  this.min = 135;
  this.elem.width = this.width;
  this.elem.style.width = this.width;
  this.elem.height = this.height;
  this.elem.style.height = this.height;
  console.log("Elem w:" + this.elem.width + " h:" + this.elem.height);
  this.stroke = "rgb(100,100,200)";
  this.context.textAlign = "center";
  this.context.textBaseLine = "middle";
};



Controll.prototype.draw = function() {
  var centerx = this.width / 2 ;
  var centery = this.height / 2;
  var test = this.max - this.min;
  var startAngle = (this.min )* Math.PI / 180.0;
  var endAngle = (this.min  + test * this.value ) * Math.PI / 180.0;
  console.log("draw:"+ this.value);
  this.context.strokeStyle = "rgba(0,200,100,0.5)";
  this.context.lineCap = "round";
  this.context.clearRect(0,0,this.width,this.height);
  this.context.beginPath();
  this.context.arc(centerx,centery,this.size,startAngle, endAngle, false);
  console.log("arc("+centerx+" ," + centery + " ," 
      + this.size + ", " + startAngle + ", "+  endAngle + "," + "true);");
  this.context.stroke();
  this.context.fillText(this.value.toFixed(2), 50,50);
};
Controll.prototype.initEvent = function() {
  this.elem.that = this;
  this.elem.addEventListener("mousedown", this.click);
  this.elem.addEventListener("mouseup", this.mouseup);
  this.elem.addEventListener("mouseout", this.mouseup);
  this.elem.addEventListener("mousemove", this.mousemove);
};
Controll.prototype.click = function(event) {
  var that = this.that;
  that.startValue = that.value;
  that.push = true;
  that.startY = event.clientY;
};
Controll.prototype.mousemove = function(event) {
  var that = this.that;
  if(that.push) {
    
    that.value = that.startValue +  (that.startY - event.clientY) / that.height;
    if(that.value > 1.0) {
      that.value = 1.0;
    }else if(that.value < 0.0) {
      that.value =0.0;
    }
    that.draw();
  }
};

Controll.prototype.mouseup = function (event) {
  var that = this.that;
  that.push = false;
  console.log("release:" + that.value);
};
