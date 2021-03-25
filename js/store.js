class Store {
	_books = [];

	initializeStore = () => {
		const books = JSON.parse(localStorage.getItem('books')) || [];
		this._setBooks(books);
	};

	getBooks = () => {
		return this._books;
	};

	addBook = (book) => {
		this._books.push(book);
		localStorage.setItem('books', JSON.stringify(this._books));
	};

	_setBooks = (books) => {
		this._books = books;
	};

	deleteBook = (bookId) => {
		this._books = this._books.filter(book => book._id !== bookId);
		localStorage.setItem('books', JSON.stringify(this._books));
	};

	getBookById = (bookId) => {
		return this._books.find(book => book._id === bookId); 
	};

	updateBook = (bookId, book) => {
		this._books = this._books.map(_book => {
			if (_book._id === bookId) return {_id: bookId, ...book};

			return _book;
		});

		localStorage.setItem('books', JSON.stringify(this._books));
	};
}

const store = new Store();

store.initializeStore();
