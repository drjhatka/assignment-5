//global variables...
const bookedSeats =[];

//functions...
function getSeatElements(){
    let elements =[];
        for (let index = 0; index < 10; index++) {
            for (let innerIndex = 1; innerIndex  <5; innerIndex++) {
               elements.push(document.getElementById(rows[index]+''+innerIndex));//rows array comes from html-helper.js   
            }//end inner for
        }//end outer for
        return elements;
}//end function


getSeatElements()

//add eventListener to each seat element
getSeatElements().forEach(element =>{
    element.addEventListener('click',(e)=>{
    if(bookedSeats.length > 3 && !bookedSeats.includes(e.target) ){
        alert('You cannot select more than 4 seats')
    }//end if
    else if(bookedSeats.includes(e.target)){
        alert('You already selected this seat')
    }
    else{
        e.target.classList.add('bg-green-500','text-white')
        bookedSeats.push(e.target)
        document.getElementById('seatsTotal').innerText = parseInt(document.getElementById('seatsTotal').innerText)+1;
        createBookingRow(e.target.innerText)
        document.getElementById('total_price').innerText = parseInt(document.getElementById('total_price').innerText) + parseInt(document.getElementsByClassName('bookedInfo')[2].innerText)
        document.getElementById('grand_total').innerText = parseInt(document.getElementById('total_price').innerText)
    }//end else
    })//end eventListener
})//end forEach

document.getElementById('coupon_btn').addEventListener('click',(e)=>{
    //validate...
    const rules = [(document.getElementById('coupon_code').value.localeCompare('NEW15')==0), 
                    (document.getElementById('coupon_code').value.localeCompare('Couple 20')==0), 
                    bookedSeats.length==4
                ];   
    if((rules[0] || rules[1])){
            const elements =[   document.getElementById('coupon_container'), 
                                document.getElementById('discount_container'),
                                document.getElementById('grand_total'),
                                document.getElementById('discount'),
                                document.getElementById('percent')
                            ];
            if(!rules[2]) alert('Book at least 4 seats to get a discount')
            else {
                    elements[0].classList.add('hidden')
                    elements[1].classList.remove('hidden')
                    rules[0] ? applyDiscount(elements,0.15):applyDiscount(elements,0.20);
                }//end inner if
        }//end inner if
    else{
        return alert('Enter Correct Coupon Code')
    } //end outer if 
})

function applyDiscount(elements, percent){
            elements[2].innerText = parseInt(elements[2].innerText)-(parseInt(elements[2].innerText)*percent);
            elements[3].innerText = (elements[2].innerText)*percent;
            elements[4].innerText = (percent*100)+'%';
}
