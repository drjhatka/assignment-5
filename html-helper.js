function createSeat(row){
    const seatContainer = document.getElementById('seatContainer')
    const container = document.createElement('div');
    container.classList.add('flex','justify-center', 'items-center','mb-4')
    html = `<div class='px-4 font-semibold'>${row}</div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 bg-gray-50 py-2'> <span id='${row}1'>${row}1</span></div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 bg-gray-50 py-2'> <span id='${row}2'>${row}2</span></div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 bg-gray-50 py-2'> <span id='${row}3'>${row}3</span></div> 
            <div class='w-20 text-center border-2 font-semibold mx-2 rounded-md border-green-700 bg-gray-50 py-2'> <span id='${row}4'>${row}4</span></div>`;
            container.innerHTML=html
    seatContainer.appendChild(container)

}
const rows = ['A','B','C','D','E','F','G','H','I','J']
for (let index = 0; index < rows.length; index++) {
    createSeat(rows[index])
    
}