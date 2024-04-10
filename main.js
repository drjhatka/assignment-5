//global variables...
    const bookedSeats =[];
    const elements =[   document.getElementById('coupon_container'),    //......0
                        document.getElementById('discount_container'),  //......1
                        document.getElementById('grand_total'),         //......2
                        document.getElementById('discount'),            //......3
                        document.getElementById('percent'),             //......4
                        document.getElementById('default_text'),        //......5
                        document.getElementById('seatsTotal'),          //......6
                        document.getElementById('total_price'),         //......7
                        document.getElementsByClassName('bookedInfo'),  //......8
                    ];
    const modalIcons =[`<i class="fa fa-check text-green-500 fa-2xl rounded-full border-2 px-4 py-4"></i>`, 
                        `<i class="fa fa-times   fa-2xl rounded-full border-2 px-4 py-4"></i>`]
//Get All Seats and load the booked seats to booked Array
    getSeatElements()

//Assign Seat Click EventListener
    getSeatElements().forEach(element =>{
        element.addEventListener('click',(e)=>{
            if(bookedSeats.length > 3 && !bookedSeats.includes(e.target)){setModelText('Error','You cannot select more than 4 seats','bg-red-700',modalIcons[1])}
            else if(bookedSeats.includes(e.target)){setModelText('Error','You already selected this seat','bg-red-700',modalIcons[1])}
            else{
                e.target.classList.add('bg-green-500','text-white')
                bookedSeats.push(e.target)
                elements[6].innerText = parseInt(elements[6].innerText)+1;
                createBookingRow(e.target.innerText)
                elements[7].innerText = parseInt(elements[7].innerText) + parseInt(elements[8][2].innerText)
                elements[2].innerText = parseInt(elements[7].innerText)
            }//end else
            if(bookedSeats.length>0){elements[5].innerText='Seats Selected'}
        })//end eventListener
    })//end forEach

// Coupon button eventListener code...
    document.getElementById('coupon_btn').addEventListener('click',(e)=>{
    //validation rules...
        const rules = [     (document.getElementById('coupon_code').value.localeCompare('NEW15')==0), 
                            (document.getElementById('coupon_code').value.localeCompare('Couple 20')==0), 
                            (bookedSeats.length==4)
                        ];    
    //validate...
        if((rules[0] || rules[1])){
            if(!rules[2]) {alert('Book at least 4 seats to get a discount')}
            else{
                elements[0].classList.add('hidden');
                elements[1].classList.remove('hidden');
                rules[0] ? applyDiscount(elements,0.15):applyDiscount(elements,0.20);
                setModelText('Discount Applied',(rules[0]? '15% Discount Applied Successfully!':'20% Discount Applied Successfully!'))
                }          
        }//end outer if
        else{
            return setModelText('ERROR','Enter Correct Coupon Code','bg-red-500')
        } //end outer else
    })//end eventListener 

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

function setModelText( msgTitle='', msgBody='', msg_color='bg-green-400', icon=modalIcons[0]){
    const modal = document.getElementById('modal');
    document.getElementById('msg_title').innerHTML = icon+' '+msgTitle;
    document.getElementById('msg_title').classList.add(msg_color,'text-white','px-4','py-4');

    document.getElementById('msg_body').innerText = msgBody;
    document.getElementById('modal_btn').innerText = 'Close';
    modal.classList.remove('hidden');
    modal.showModal();
}//end function

function applyDiscount(elements, percent){
            elements[3].innerText = parseInt((elements[2].innerText))*percent;//discount
            elements[2].innerText = parseInt(elements[2].innerText)-(parseInt(elements[2].innerText)*percent);//grand total
            elements[4].innerText = (percent*100)+'%';//percent 
}//end function

function resetSeatSelection(){
    bookedSeats.length=0;
    //clear seat selection highlight
                elements[6].innerText = 0;
                // createBookingRow(e.target.innerText)
                elements[7].innerText = 0;
                elements[2].innerText = 0;

    //clear booked row seats
        document.getElementById('bookedRow').innerHTML=''
        clearSeatHighlight()
        elements[0].classList.remove('hidden')
        document.getElementById('coupon_code').value=''
        document.getElementById('coupon_code').setAttribute('placeholder','Paste Coupon Code?')
        elements[1].classList.add('hidden')
}

function clearSeatHighlight(){
    getSeatElements().forEach(element=>{element.classList.remove('bg-green-500','text-white')})
}