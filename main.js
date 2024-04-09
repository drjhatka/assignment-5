const clickedSeats =[];


function getSeatElements(){
    let counter=1;
    const idList = ('abcdefghij'.toUpperCase()).split('').map(id =>{
        for (let index = 0; index < 4; index++) {
            return document.getElementById(id+""+counter);    
        }
        counter=1;
    });
    return idList
}//end function

getSeatElements().forEach(element =>{
    addEventListener('click',(e)=>{
        //toggle background...

    })
})
