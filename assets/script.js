let input = document.getElementById('input-field')
let unorderedList = document.getElementById('list')
let removeInput = document.getElementById('clear-field')

// Empty array for tasks
var todos = []

function rendertoDo() {
    // Tracks user input
    var todo = input.value

    todos.push(todo) 
    console.log(todo)

    for(var i = 0; i < todos.length; i++) {
        var li = document.createElement('li')
        li.textContent = todos[i]
        unorderedList.append(li)
        li.style.listStyle = 'none'
        li.style.textAlign = 'center'
    }

}


input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
    // pushes values to array
    console.log(todos)
    rendertoDo()
    }

})

removeInput.addEventListener('click', function() {
    // To clear field
unorderedList.innerHTML = ''
})

