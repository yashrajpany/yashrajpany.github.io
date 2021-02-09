class Book{
constructor(title, author, isbn){
this.title = title;
this.author = author;
this.isbn = isbn;
}
}

class UI{
    constructor(){}
    addBook(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
    
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "delete">x</a></td>`;
        list.appendChild(row);
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    alert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector
        ('.container');
        const form = document.getElementById('book-form');
        container.insertBefore(div, form);
    
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    
    const ui = new UI();

    if(title == ''|| author == ''|| isbn == ''){
        ui.alert('Please fill all fields','error');
    } else{
        ui.addBook(book);  
        ui.alert('Book Added','success');
        ui.clearFields();
    }

  
    e.preventDefault();
}); 

document.getElementById('book-list').addEventListener('click', (e) => {
    const ui = new UI();

    ui.deleteBook(e.target);
    ui.alert('Book Removed', 'success');
    e.preventDefault();
});