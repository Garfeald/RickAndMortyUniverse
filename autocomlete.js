
const showAutocomplete = document.getElementById('button-autocomplete').addEventListener('click', () => {
  // asyncRick(randomNumbers(667));
  $('.block-button').addClass('changed')
  $('.block_autocomplete').addClass('block_autocomplete--active')
  $('.block-button__main').addClass('block-button__main--active')
})

const getNamesList = (value) => {
    $('#datalistOptions').empty();
    if(value != ''){
      fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        data.results.map((i) => {
          $('#datalistOptions').append(`<li onclick="infoClick(${i.id}, event)" class="listOfCharacters">${i.name}</li>`)
        })
      })
    }
    document.getElementById('datalistOptions').innerHTML = ''
  }
  
  const showNamesList = () => {
    const value = document.querySelector('#autocomlete').value;
    getNamesList(value)
  }
  
  const useEffect = document.getElementById('autocomlete').addEventListener(
       'input', 
         () => {showNamesList()}
  )

  const inputEventPreventDefault = (e) => {
    e.preventDefault();
  }