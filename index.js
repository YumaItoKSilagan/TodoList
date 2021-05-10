'use strict'
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list'); //HTMLのUlクラス名"todo-list"を選択
console.log("todoButton");

//Event Listener
todoButton.addEventListener.on('click', addTodo); //HTMLでクリックしたらaddTodoファンクションが動く

//Function　クリック後の処理addTodoファンクション
function addTodo(event){

   //デフォルトの機能中止
    event.preventDefault();
    
    //Todo DIV　createElement('HTMLのタグ名で動作させるもの')
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); //todoクラスリストを追加する。

    //Create LI
    const newTodo = document.createElement('li'); //newTodo変数にliのリストを作成
    newTodo.innerText = 'hey'; //newTodo変数にリストに表示されるテキストheyを指定
    newTodo.classList.add('todo-item'); //newTodo変数にクラスリストtodo-itemを追加
    todoDiv.appendChild(newTodo); //appendChildでnewTodoの処理をtodoDivに処理追加

    //Complete Button
    const CompletedBut = document.createElement('button');
    CompletedBut.innerHTML ='<i class="fas fa-check"></i>';
    CompletedBut.classList.add("complete-btn");
    todoDiv.appendChild(CompletedBut);

    //Delete Button
    const DeleteBut = document.createElement('button');
    DeleteBut.innerHTML ='<i class="fas fa-delete"></i>';
    DeleteBut.classList.add("complete-btn");
    todoDiv.appendChild(DeleteBut);

    //append to LIST
    todoList.appendChild(todoDiv); //appendChildでtodoDivの処理をtodoListに追加。（todoDivには"Create LI"/ "Complete Button" /"Delete Button"の三つの処理が追加されている。）

}