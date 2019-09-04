class Board{
  constructor(){
    this.drawDeck = new Deck(this);
    this.discardDeck = new Deck(this);
    this.babiesDeck = new Deck(this);
    this.currentPlayer = 0;
    this.actionsLeft = 4;
    this.players = [new Player(this), new Player(this)];
    this.cardQueue = null;
    this.draw  = this.draw.bind(this)
  }
  generateDom(){
    var drawDOM = $('<div>').addClass('draw').css("height", "100%");
    drawDOM.click(this.draw);
    var discardDOM = $("<div>").addClass("discard");
    // var discardDOM =
    $('#drawPile').append(drawDOM);
    $("#discardPile").append(discardDOM);
  }
  draw(){
    var cardDrawn = this.drawDeck.draw();
    cardDrawn.parent = this.players[this.currentPlayer];
    this.players[this.currentPlayer].deck.placeInDeck(cardDrawn);
    this.actionsLeft--;
    this.players[this.currentPlayer].render();
    }

}
