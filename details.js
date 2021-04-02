
const validDate = (date) => {
  return new Date(date).toLocaleDateString();
}

const infoClick = (id) => {
    $("#body-details").empty();
    $("#body").addClass('body-display-none');
    $("#body-details").addClass('body-details-display-flex')
    $("#button-back").addClass('button-back-display-flex')
    $('.block_autocomplete').removeClass('block_autocomplete--active')
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        document.getElementById('body-details').innerHTML +=
        `<div class="image__deteils">
          <img class="image__deteils-img" src='${data.image}' />
          <div class="image__deteils-text">
            <p>Name: ${data.name}</p>
            <p>Status: ${data.status}</p>
            <p>Species: ${data.species}</p>
            <p>Gender: ${data.gender}</p>
            <p>Type: ${data.type ? data.type : ' Oops type not found'}</p>
            <p>Location: ${data.location.name}</p>
            <p>Created: ${validDate(data.created)}</p>
          </div>
        </div>`
    })
    // document.getElementById('datalistOptions').innerHTML = ''
  }

  const infoClickImage = (id) => {
    $("#body-details").empty();
    $("#body").addClass('body-display-none');
    $("#body-details").addClass('body-details-display-flex')
    $("#button-back-image").addClass('button-back-display-flex')
    $('.block_autocomplete').removeClass('block_autocomplete--active')
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        document.getElementById('body-details').innerHTML +=
        `<div class="image__deteils">
          <img class="image__deteils-img" src='${data.image}' />
          <div class="image__deteils-text">
            <p>Name: ${data.name}</p>
            <p>Status: ${data.status}</p>
            <p>Species: ${data.species}</p>
            <p>Gender: ${data.gender}</p>
            <p>Type: ${data.type ? data.type : ' Oops type not found'}</p>
            <p>Location: ${data.location.name}</p>
            <p>Created: ${validDate(data.created)}</p>
          </div>
        </div>`
    })
    // document.getElementById('datalistOptions').innerHTML = ''
  }
  

const buttonBack = () => {
    $("#body").removeClass('body-display-none');
    $("#body-details").removeClass('body-details-display-flex')
    $("#button-back").removeClass('button-back-display-flex')
    $('.block_autocomplete').addClass('block_autocomplete--active')
}

const buttonBackToImageList = () => {
  $("#body").removeClass('body-display-none');
  $("#body-details").removeClass('body-details-display-flex')
  $("#button-back-image").removeClass('button-back-display-flex')
}