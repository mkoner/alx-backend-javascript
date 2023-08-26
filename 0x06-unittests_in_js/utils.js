const Utils = {
    calculateNumber(type, a, b){
        console.log("utils called");
        switch(type) {
            case 'SUM':
                return Math.round(a) + Math.round(b);
            case 'SUBTRACT':
                return Math.round(a) - Math.round(b);
            case 'DIVIDE':
                if(Math.round(b) == 0)
                return 'Error';
                return Math.round(a) / Math.round(b);
            default:
                return 'type can only be SUM, SUBTRACT or DIVIDE'
        }
    },
};

module.exports = Utils;