var BasicCard = function (front, back){
    if(this instanceof BasicCard){
        this.front = front;
        this.back = back;
    } else {
        return new BasicCard(front,back);
    }
};

BasicCard.prototype.readCard = function(){
    console.log("Front: " + this.front);
    console.log("Back: " + this.back);
};

module.exports = BasicCard;