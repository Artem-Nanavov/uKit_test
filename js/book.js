class Book {
	/**
	 * @param {{author: string; bookName: string; _id: string}} book 
	 */
	_createBook = (book) => {
		const newBook = document.createElement('div');
		newBook.classList.add('book');
		newBook.id = book._id;

		newBook.innerHTML = `
			<div class="book__text">
				<p class="font-weight-light">${book.author}</p>
				<p class="font-weight-light">${book.bookName}</p>
			</div>

			<div class="books__btns">
				<button type="button" onclick="console.log(${book._id})" class="btn btn-outline-info btn-sm">Изменить</button>

				<button type="button" onclick="book._deleteBook('${book._id}')" class="btn btn-outline-danger btn-sm">Удалить</button>
			</div>
		`

		return newBook;
	};

	addBook = () => {
		const _id = generateId(10);
		const author = document.getElementById('author').value;
		const yearOfPublishing = document.getElementById('yearOfPublishing').value;
		const bookName = document.getElementById('bookName').value;
		const numberOfPage = document.getElementById('numberOfPage').value;
	
		store.addBook({
			_id,
			author,
			yearOfPublishing,
			bookName,
			numberOfPage,
		});
	
		document.getElementById('addBookForm').reset()
	
		const newBook = this._createBook({_id, author, bookName})
	
		document.getElementById('books').append(newBook);
	};

	_deleteBook = (bookId) => {
		store.deleteBook(bookId);

		const elem = document.getElementById(bookId);
    elem.parentNode.removeChild(elem);
	};
}

const book = new Book();

const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', book.addBook);
