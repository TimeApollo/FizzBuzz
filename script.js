for(var i = 1; i<=1000; i++){
    var prime = 1;
    if(i===1){
        prime = 0;
    }
    if(i>1){
        for(var j=2;j<i;j++){
            if(i%j===0){
                prime = 0;
                break;
            }
        }
    }
    if(i===3){
        document.write('<span style="color:green;border-style:solid;border-color:red">',i,', </span>');//edge case
    }else if(i===2){
        document.write('<span style="border-style:solid;border-color:red"><strong>',i,'</strong>, </span>');//edge case
    }else if(i%3===0 && i%2===0 && i!==1000){
        document.write('<span style="color:green"><strong>',i,'</strong>, </span>');//make bold and green
    }else if(i%3!==0 && i%2===0 && i!==1000){
        document.write('<span><strong>',i,'</strong>, </span>');//make bold
    }else if(i%3===0 && i%2!==0 && i!==1000){
        document.write('<span style="color:green">',i,', </span>');//make green
    }else if(i===1000){
        document.write('<span><strong>',i,'.</strong></span>');//make green with period at end
    }else if(prime === 1){
        document.write('<span style="border-style:solid;border-color:red">',i,', </span>');//outline border
    }else{
        document.write(i,", ");//no change to it
    }
}