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
                        document.getElementById('coupon_code'),         //......9
                        document.getElementById('coupon_btn'),          //......10
                        document.getElementById('next_btn'),          //......11
                        document.getElementById('pax_phone'),          //......12
                        document.getElementById('pax_name'),          //......13
                        document.getElementById('pax_email'),          //......14
                        document.getElementById('total_seats'),          //......15
                    ];
//Get All Seats and load the booked seats to booked Array...
    getSeatElements()

//Assign Seat Click EventListener...
    getSeatElements().forEach(element =>{
        element.addEventListener('click',(e)=>{
            if(bookedSeats.length > 3 && !bookedSeats.includes(e.target)){setModelText('ERROR','You cannot select more than 4 seats','images/error.png')}
            else if(bookedSeats.includes(e.target)){setModelText('ERROR','You already selected this seat','images/error.png')}
            else{
                e.target.classList.add('bg-green-500','text-white')
                bookedSeats.push(e.target)
                elements[6].innerText = parseInt(elements[6].innerText)+1;
                createBookingRow(e.target.innerText)
                elements[7].innerText = parseInt(elements[7].innerText) + parseInt(elements[8][2].innerText)
                elements[2].innerText = parseInt(elements[7].innerText)
                elements[15].innerText = parseInt(elements[15].innerText)-1;
            }//end else
            if(bookedSeats.length ==4){
                elements[9].removeAttribute('disabled')
                elements[10].removeAttribute('disabled')
            }
            if(bookedSeats.length>0){
                elements[5].innerText='Seats Selected';
                elements[11].removeAttribute('disabled')
            }  
        })//end eventListener
    })//end forEach

// Coupon button eventListener code...
    elements[10].addEventListener('click',(e)=>{
    //validation rules...
        const rules = [     (document.getElementById('coupon_code').value.localeCompare('NEW15')==0), 
                            (document.getElementById('coupon_code').value.localeCompare('Couple 20')==0), 
                            (bookedSeats.length==4)
                        ];    
    //validate...
        if((rules[0] || rules[1])){
            if(!rules[2]) {setModelText('ERROR','Book at least 4 seats to get a discount','images/error.png')}
            else{
                elements[0].classList.add('hidden');
                elements[1].classList.remove('hidden');
                rules[0] ? applyDiscount(elements,0.15):applyDiscount(elements,0.20);
                setModelText('Discount Applied!',(rules[0]? `15% Discount Applied`:'20% Discount Applied'),'images/success.png')
                }          
        }//end outer if
        else{
            return setModelText('ERROR','Enter Correct Coupon Code','images/error.png')
        } //end outer else
    })//end eventListener 

//Purchase button eventListener
    elements[11].addEventListener('click',(e)=>{
        console.log(elements[12].value.length)
        if( elements[12].value.length !=11){
            setModelText('Error','Enter A Valid Phone no with 11 Digits','images/error.png')
           
        }
        else{
            setModelText('Booking Confirmed!', 
                    '<div class="flex flex-col text-black gap-5 items-center justify-center"><span class="text-[16px]">Thank you for Booking Our Bus Seats.<br>We are working hard to find the best service and deals for you.</span><span class="text-sm" >Shortly you will find a confirmation in your email.</span></div>','images/success.png')
            resetSeatSelection()
        }
    })

//functions...
function getSeatElements(){
    let elements =[];
        for (let index = 0; index < 10; index++) {
            for (let innerIndex = 1; innerIndex  <5; innerIndex++) {
               elements.push(document.getElementById(['A','B','C','D','E','F','G','H','I','J'][index]+''+innerIndex));   
            }//end inner for
        }//end outer for
        return elements;
}//end function

function setModelText( msgTitle='', msgBody='', img_ref ){
    const modal = document.getElementById('modal');
    document.getElementById('msg_title').innerHTML = `<div class='flex flex-col items-center justify-center'><img width=150 height=150 src=${img_ref} /> <span>${msgTitle}<span></div>`;
    document.getElementById('msg_title').classList.add('px-4','py-4','text-red-800');
    document.getElementById('msg_body').innerHTML = msgBody;
    document.getElementById('msg_body').classList.add('text-center','text-red-800')
    document.getElementById('modal_btn').innerText = 'Continue';
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
                elements[7].innerText = 0;
                elements[2].innerText = 0;
    //clear booked row seats
        document.getElementById('bookedRow').innerHTML=''
        clearSeatHighlight()
        elements[0].classList.remove('hidden')
        document.getElementById('coupon_code').value=''
        document.getElementById('coupon_code').setAttribute('placeholder','Paste Coupon Code Here')
        elements[1].classList.add('hidden')
        elements[9].setAttribute('disabled','true')
        elements[10].setAttribute('disabled','true')
        elements[11].setAttribute('disabled','true')
        elements[12].value='';
        elements[13].value='';
        elements[14].value='';
        elements[15].innerText=40;
}

function clearSeatHighlight(){
    getSeatElements().forEach(element=>{element.classList.remove('bg-green-500','text-white')})
}