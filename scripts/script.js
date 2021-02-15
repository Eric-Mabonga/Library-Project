document.addEventListener('DOMContentLoaded', () => {
  /* Create HTML Elements */

  /* Main Elements Variables */
  const body = document.querySelector('body')
  const container = document.createElement('div')
  const table = document.createElement('table')
  const row = document.createElement('tr')
  const headingText = ['Title', 'Author', 'Pages', 'Read Status']

  /* Create Main Container */
  function createContainer () {
    container.setAttribute('class', 'container')
    body.appendChild(container)
  }
  createContainer()

  /* Create Table */
  function createTable () {
    table.setAttribute('border', '1')
    container.appendChild(table)
  }
  createTable()

  /* Create Heading */
  function createHeading () {
    table.appendChild(row)
    for (let i = 0; i < headingText.length; i++) {
      const heading = document.createElement('th')
      heading.innerHTML = headingText[i]
      row.appendChild(heading)
    }
  }
  createHeading()

  /* Create Rows */
  function createRows () {
    const rows = document.createElement('tr')
    table.appendChild(rows)
    for (let i = 0; i < headingText.length; i++) {
      const columns = document.createElement('td')
      columns.innerHTML = headingText[i]
      rows.appendChild(columns)
    }
  }
  //

  /* Button */
  const button = document.createElement('button')
  container.appendChild(button)
  button.innerHTML = 'New Book'
  button.addEventListener('click', () => {
    createRows()
  })

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
