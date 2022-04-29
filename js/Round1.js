class Round1 {
  constructor() {

    this.hint = createElement("h3");
    this.input = createInput("").attribute("placeholder","Enter Your Answer");
    this.button = createButton("Submit");
    this.message = createElement("h2");
  }

  //start() {
    //form = new Form();
    //form.display();
    //player = new Player();//}
  

  hide(){
    this.input.hide();
    this.button.hide();
    this.message.hide();
  }

  play(){
    image(bg2Image,0,0,width,height);
    //console.log("play is working");
  }

  display(){
    this.hint.html("Hint:- A Life Saver.");
    this.hint.position(150,80);
    this.input.position(150,230);
    this.button.position(290,300);

    this.button.mousePressed(()=>{
      this.message.html("Thank You For Answering");
      this.message.position(300,300);

      var userAnswers = this.input.value()
        if(userAnswers === answer1){
          var round2 = new Round2()
          round2.display();
        }
    })
  }
}
