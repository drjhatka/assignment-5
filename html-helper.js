function createSeat(row){
    const seatContainer = document.getElementById('seatContainer')
    const container = document.createElement('div');
    container.classList.add('flex','justify-center', 'items-center','mb-4')
    html = `<div class=' font-semibold'>${row}</div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 cursor-pointer bg-gray-50 py-2'> <p class='min-w-full  border-2' id='${row}1'>${row}1</p></div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 cursor-pointer bg-gray-50 py-2'> <p class='min-w-full  border-2' id='${row}2'>${row}2</p></div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 cursor-pointer bg-gray-50 py-2'> <p class='min-w-full  border-2' id='${row}3'>${row}3</p></div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 cursor-pointer bg-gray-50 py-2'> <p class='min-w-full  border-2' id='${row}4'>${row}4</p></div>`;
            container.innerHTML=html
    seatContainer.appendChild(container)

}
function createBookingRow(seatNo){
    const div = document.createElement('div');
    div.classList.add('grid','grid-cols-3','justify-between')
    const html=` <h1 class="bookedInfo">${seatNo}</h1>
                <h1 class=" bookedInfo">Economy</h1>
                <h1 class="bookedInfo">550</h1>`;
            div.innerHTML =html;
    document.getElementById('bookedRow').appendChild(div)
    console.log(document.getElementsByClassName('bookedInfo')[2].innerText)

}
const rows = ['A','B','C','D','E','F','G','H','I','J']
for (let index = 0; index < rows.length; index++) {
    createSeat(rows[index])   
}