//まず入力された値にアクセスするために、inputタグにアクセスする。
//ボタンのクリックイベントを受信するためにbuttonにアクセス
//新しい項目を追加するために、unordered listにアクセスする必要がある

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue =  inputEl.value;//inputタグのinputElの値をここで呼ぶ
//     const listItemEl = document.createElement('li');//document.createElementで新しいリスト項目を作る
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);

// }

// buttonEl.addEventListener('click',addGoal);//buttonタグがclickされるとaddgoal()関数が呼び出される


const buttonEl =document.querySelector('button');
const inputEl =document.querySelector('input');
const listEl =document.querySelector('ul');

function addGoal(){
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl); 

    
    listEl.appendChild(listItemEl);
    inputEl.value='';

}
buttonEl.addEventListener('click',addGoal);



//色の違い
//
