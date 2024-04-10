const rows = ['A','B','C','D','E','F','G','H','I','J']
for (let index = 0; index < rows.length; index++) {
    createSeat(rows[index])   
}

//Helper functions...
function createSeat(row){
    const seatContainer = document.getElementById('seatContainer')
    const container = document.createElement('div');
    container.classList.add('flex','justify-center', 'items-center','mb-4','gap-4')
    html = `<div class=' font-semibold'> ${row}</div> 
            <div class='w-20 text-center border-2 font-semibold  rounded-md border-green-700 cursor-pointer bg-gray-50 '> <p class='min-w-full py-2' id='${row}1'>${row}1</p></div> 
            <div class='w-20 text-center border-2 font-semibold  rounded-md border-green-700 cursor-pointer bg-gray-50 '> <p class='min-w-full py-2' id='${row}2'>${row}2</p></div> 
            <div class='w-20 text-center border-2 font-semibold  rounded-md border-green-700 cursor-pointer bg-gray-50 '> <p class='min-w-full py-2' id='${row}3'>${row}3</p></div> 
            <div class='w-20 text-center border-2 font-semibold  rounded-md border-green-700 cursor-pointer bg-gray-50 '> <p class='min-w-full py-2' id='${row}4'>${row}4</p></div>`;
            container.innerHTML=html
    seatContainer.appendChild(container)
}//end function

function createBookingRow(seatNo){
    const div = document.createElement('div');
    div.classList.add('grid','grid-cols-3','lg:w-full','gap-24','lg:gap-36','border-2','rounded-lg','border-green-700','px-8','py-2','shadow-lg')
    const html=` 
                <div class='flex w-full lg:w-36 items-center gap-8 text-md'>
                    <i class="fas fa-ticket fa-lg fa-fw text-blue-700"> </i>
                    <h1 class="bookedInfo">${seatNo}</h1>
                </div>
                <h1 class=" bookedInfo">Economy</h1>
                <div class='flex w-36 items-center'>
                    <span class='font-extrabold text-green-600 text-lg'>\u09F3</span><h1 class="bookedInfo">550</h1>
                </div>`;
            div.innerHTML =html;
    document.getElementById('bookedRow').appendChild(div)
}//end function
