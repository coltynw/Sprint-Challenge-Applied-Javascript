// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function tabFunction(topic){
    const tab = document.createElement('div');
    tab.classList.add('tab');

    tab.textContent = topic;

    return tab;
}

topics = document.querySelector('.topics');


axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {

        //checkin out the topics array
        console.log(response.data);

        response.data.topics.forEach( topic => {
            let tabber = tabFunction(topic);
            topics.append(tabber);
        })
    })

    //the error
    .catch(error => {
        console.log("Couldn't get Data", error);
    })   