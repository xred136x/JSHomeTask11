
const addBlock = document.querySelector('#add-block');
const delBlock = document.querySelector('#del-block');
//localStorage.clear();
let count = localStorage.getItem('counter');
console.log(count);
window.onload = () => {
    if(count === null){
        for(let i = 0; i < 3; i++){
            let firstBlocks = document.createElement('div');
            firstBlocks.className = 'block';
            firstBlocks.id = `${i}`;
            count++;
            console.log('for '+count);
            container.appendChild(firstBlocks);
        }
    }
    else{
        for(let i = 0; i < localStorage.getItem('counter'); i++){
            let firstBlocks = document.createElement('div');
            firstBlocks.className = 'block';
            firstBlocks.id = `${i}`;
            //count++;
            console.log('else '+count);
            container.appendChild(firstBlocks);
        }
    }
}    

addBlock.addEventListener('click', () =>{
    let newBlock = document.createElement('div');
    newBlock.className = 'block';
    newBlock.id = `${count}`;
    count++;
    localStorage.setItem('counter', count);
    console.log('add '+count);
    container.appendChild(newBlock); 
});

delBlock.addEventListener('click', () => {
    --count;
    var dBlock = document.getElementById(`${count}`);
    //console.log(dBlock);
    dBlock.remove();    
    localStorage.setItem('counter', count);
    console.log('del '+count);
});
        
