document.addEventListener('DOMContentLoaded', () => {
  /* Create HTML Elements */

  /* Main Container */
  const body = document.querySelector('body')
  const container = document.createElement('div')
  container.setAttribute('class', 'container')
  body.appendChild(container)

/* Books Table */
    
  const myLibrary = [1, 2, 3, 4, 5]

  /* Book Function */
  function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
      return (this.title + ' by ' + this.author + ',' + this.pages + ' pages, ' + this.read)
    }
  }

  /* Add Book Function */
  const addBookToLibrary = () => {
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(i)
    }
  }
  addBookToLibrary()
})
