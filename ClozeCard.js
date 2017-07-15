var getPartial = function(t,c){
    var str = '';
    if (t.includes(c)) {
        str = t.replace(c, '...');
    } else {
        str = 'Incorrect Cloze'
    }
    return str;
};


var ClozeCard = function (fullText, cloze) {
    if (this instanceof ClozeCard) {
        if (fullText.includes(cloze)) {
            this.fullText = fullText;
            this.cloze = cloze;
            this.partial = getPartial(fullText,cloze);//this.fullText.replace(this.cloze, '...');
        } else {
            console.log('Sorry... its not the right cloze !!');
        }
    } else {
        return new ClozeCard(text, cloze);
    }
};

ClozeCard.prototype.checkCloze = function() {
    //var str = '';
    if (this.fullText.includes(this.cloze)) {
        //str = text.replace(this.cloze, '...');
        return true;
    } else {
        return false;
    }
};

ClozeCard.prototype.getPartialText = getPartial;

//console.log(ClozeCard.prototype.getPartialText);

module.exports = ClozeCard;