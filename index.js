const apiKey = '4IZjL3rkDN71YavBsSY9bQr5pfVMvJmWIjr2eS7M';
const endpoint = '';

function displayResults(responseJson, maxResults, stateSelections) {
    console.log(responseJson);

    $('#results-list').empty();

    for(let i = 0; i < .length & i < maxResults; i++) {
        $('#results-list').append(
            `
            <li>
                <h3>Name</h3>
                <p>Description</p>
                <p>Address</p>
                <a href="URL">URL Title</a>
            </li>
            `
        )
    }

    $('#results').removeClass('hidden')
}

function getParks(query, maxResults, stateSelections) {
    const param {

    };
    console.log(params);

    const url = `${endpointURL}`;
    console.log(url)

    fetch(url, params)
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(responseJson => displayResults(responseJson, maxResults, stateSelections))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchForm() {
    $('form'.submit(event => {
        event.preventDefault();

        const searchPark = $('').val();
        const searchState = $('').val();
        const maxResults = $('#js-max-results').val();

        getParks(searchPark, searchState, maxResults);
    }));
}

$(watchForm);