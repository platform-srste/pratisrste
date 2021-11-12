module.exports = {
    ifthenelse: function(name, input, scope, next) {
        console.log('in ifthenelse...');
    },

    definevar: function() {
        
    },

    fetchthen: function() {

    },

    expressionthen: function(){        

    },

    simpleExpr: function() {

    },

    complexExpr: function() {

    },
    scripted: function() {

    },

    whilethen: function() {

    },

    foruntil: function() {

    },

    leftOperand: function() {

    },

    operator: function() {

    },

    operationsList: function() {

    },

    rightOperand: function() {

    },
    
    logicblock: function() {

    },

    beginblock: function() {

    },

    endblock: function() {

    },
    any: function() {

    },

    staticList: function() {

    },

    variableList: function() {

    },

    expressionblock: function() {

    },

    nextOptions: {
        ifthenelse: ['beginblock', 'expressionthen', 'fetchthen', 'definevar'],
        definevar: ['beginblock', 'expressionthen', 'fetchthen', 'definevar', 'ifthenelse', 'whilethen', 'foruntil'],
        fetchthen: ['beginblock', 'expressionthen', 'fetchthen', 'definevar'],
        expressionthen: ['simpleExpr', 'complexExpr', 'scripted'],
        simpleExpr: ['leftOperand', 'operator', 'rightOperand'],
        leftOperand: ['staticList', 'operator', 'variableList'],
        operator: ['operationsList'],
        rightOperand: ['staticList', 'variableList', 'expressionblock'],
        expressionblock: ['ifthenelse', 'whilethen', 'foruntil'],
        beginblock: ['logicblock', 'endblock', 'expressionthen', 'fetchthen', 'definevar'],
        whilethen: ['beginblock', 'expressionthen', 'fetchthen', 'definevar'],
        foruntil: ['beginblock', 'expressionthen', 'fetchthen', 'definevar'],
        logicblock: ['endblock', 'expressionthen', 'fetchthen', 'definevar']
    }
}