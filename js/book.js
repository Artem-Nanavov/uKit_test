class Book {
	editBookId = null;

	/**
	 * @param {{author: string; bookName: string; _id: string}} book 
	 */
	_createBook = (book) => {
		const newBook = document.createElement('div');
		newBook.classList.add('book');
		newBook.id = book._id;

		newBook.innerHTML = `
			<div class="book__text">
				<p name="author" class="font-weight-light">${book.author}</p>
				<p name="bookName" class="font-weight-light">${book.bookName}</p>
			</div>

			<div class="books__btns">
				<button type="button" onclick="book.editBook('${book._id}')" class="btn btn-outline-info btn-sm">Изменить</button>

				<button type="button" onclick="book.deleteBook('${book._id}')" class="btn btn-outline-danger btn-sm">Удалить</button>
			</div>
		`

		return newBook;
	};

	addBook = () => {
		const form = document.getElementById('addBookForm').elements;
		const book = {_id: generateId(10), ...getValuesFromForm(form)};

		store.addBook(book);
		document.getElementById('addBookForm').reset();
		const newBook = this._createBook(book);
		document.getElementById('books').append(newBook);
	};

	deleteBook = (bookId) => {
		store.deleteBook(bookId);

		const book = document.getElementById(bookId);
    book.parentNode.removeChild(book);
	};

	renderBooks = () => {
		const books = store.getBooks();

		for (let i = 0; i < books.length; ++i) {
			const book = this._createBook(books[i]);

			document.getElementById('books').append(book);
		}
	};

	editBook = (bookId) => {
		this.editBookId = bookId;
		const book = store.getBookById(bookId);
		const form = document.querySelector('.editBook__form').elements;

		for (let i = 0; i < form.length; ++i) {
			if (form[i].nodeName === 'INPUT') {
				form[i].value = book[form[i].name];
			}
		}

		document.body.style.overflow = 'hidden';
		document.querySelector('.editBook').style.display = 'flex';
	};

	saveChanges = () => {
		const form = document.querySelector('.editBook__form').elements;
		const book = {...getValuesFromForm(form)};

		this._updateBookHtml(this.editBookId, book);
		store.updateBook(this.editBookId, book);

		document.querySelector('.editBook').style.display = 'none';
		this.editBookId = null;
	};

	_updateBookHtml = (bookId, _newBook) => {
		const p = document.getElementById(bookId).getElementsByTagName('p');
		
		for (let i = 0; i < p.length; ++i) {
			p[i].innerText = _newBook[p[i].attributes[0].value];	
		}
	};
}

const book = new Book();

book.renderBooks();

document.getElementById('addBook').addEventListener('click', book.addBook);
document.getElementById('editBookBtn').addEventListener('click', book.saveChanges);
