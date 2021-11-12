var meta = require('./meta-constructs');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

var flowMeta = {'root': {}}
var flowSeries = 1;
var current = flowMeta['root'];
var flowMetaFlat = {};
var previousInstruction = '';

function promptInput (prompt, handler)
{
    rl.question(prompt, input =>
    {
        if (handler(input) !== false)
        {
            promptInput(prompt, handler);
        }
        else
        {
            rl.close();
        }
    });
}

function showCommands() {
    var output = "choose ";    
    if(meta.nextOptions[previousInstruction]){
        output = output + meta.nextOptions[previousInstruction].join(" or ");
        output = output + "?";
    }    
    console.log(output);
}

promptInput(">" , input =>
{
    switch (input)
    {
        case 'exit':
            console.log('Bye!');
            return false;
        case 'showFlow':
            console.log('Complete Flow = ');
            console.log(flowMeta);
            console.log('Current Flow = ');
            console.log(current);
            break;  
        case input.match(/^goto/)?input.match(/^goto/).input:'':
            console.log('in goto... ' + input);
            let regexResult = input.match(/^goto\s+([0-9]+)/);
            let stepNumber;
            if(regexResult && regexResult.length >= 2) {
                stepNumber = regexResult[1];         
            }
            if(stepNumber) {
                console.log('Go to step number - ' + stepNumber);                
                current = flowMetaFlat[parseInt(stepNumber)];
            }
            break;        
        default: 
            input = input.toString();
            if(meta[input]) {
                let keyName = flowSeries + '-' + input;                
                current[keyName] = {};            
                flowMetaFlat[flowSeries] = current;
                current = current[keyName];                
                previousInstruction = input;
                flowSeries++;
            }else{
                console.log('Invalid command!!... try again...')                
            }
            break;
    }
    showCommands();
})