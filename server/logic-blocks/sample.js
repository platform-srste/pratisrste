/*
define -> scope 
g_scope
f_scope

logic_block1 -> lb1_input

if -> exp1_if
    expression -> exp1
then  
    logic-block -> exp1_if_logic
else if -> exp2_if
    expression -> exp2
while  -> exp3_while
    expression -> exp3
then
    logic-block -> exp3_logic


ootb_exp1 -> ootb_exp1_input

*/





var expression = (function(input) {
    return new Promise((resolve, exp1_rej) => {
        resolve(input.a==input.b);
    });
});

var exp1_if = function(parentCtx) {
    return new Promise((exp1_if_res, exp1_if_rej) => {
        console.log('exp1_if');
        setTimeout(resolveFunc.bind({resolveFn: exp1_if_res, data: 'data1'}), 1000);
    });
}

var exp1_next = function(parentCtx) {    
    return new Promise((exp1_next_resolve, exp1_next_reject) => {
        console.log('exp1_next');
    });
}

exp1('hello', 'hello')
.then(exp1_result => {
        if(exp1_result) {
            return exp1_if(this);
        }else {
            exp1_next(this);
        }
    });


var resolveFunc = function() {
    this.resolveFn(this.data);
}

var rejectFunc = function() {
    this.rejectFn(this.data);
}
        