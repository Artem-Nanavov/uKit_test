const addBooks = () => {
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

	const newBook = book.createBook({_id, author, bookName})

	document.getElementById('books').append(newBook);
};

const addBookBtn = document.getElementById('addBook');
addBookBtn.addEventListener('click', addBooks);
