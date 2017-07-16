var getPartial = function (t, c) {
    var str = '';
    if (t.includes(c)) {
        str = t.replace(c, '...');
    } else {
        str = '**** Incorrect Cloze ****'
    }
    return str;
};


var ClozeCard = function (fullText, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = fullText;
        this.cloze = cloze;
        this.partial = getPartial(fullText, cloze);//this.fullText.replace(this.cloze, '...');
        if (!fullText.includes(cloze)) {
            console.log('Sorry... its not the right cloze !!');
        }
    } else {
        return new ClozeCard(fullText, cloze);
    }
};

ClozeCard.prototype.checkCloze = function () {
    if (this.fullText.includes(this.cloze)) {
        return true;
    } else {
        return false;
    }
};

ClozeCard.prototype.readCard = function () {
    console.log("Full Text: "+this.fullText);
    console.log("Cloze: "+this.cloze);
    console.log("Partial: "+this.partial);
};

/** test */
// var card = ClozeCard("Lord of the Rings","Rins");
// console.log(card.partial);
// console.log(card.checkCloze());
/** test */

module.exports = ClozeCard;