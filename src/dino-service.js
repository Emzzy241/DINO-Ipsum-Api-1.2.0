// the business logic of my application

export class DinoService {
    static findSomeDinos(noOfDinosaursNames, noOfDinosaursParagraph) {
        // making my API call without using XMLHttpRequest and its properties but using fetch


        // picking up the endpoint url 
        return fetch(`https:dinoipsum.com/api/?format=json&words=${noOfDinosaursNames}&paragraphs=${noOfDinosaursParagraph}`)

            // since fetch returns a promise, we can use .then on it

            // the .then() here would either return a resolved promise(which should be showing me the data) or a rejected promise(in this case throw An Error)
            .then(function (dinoResponse) {
                // the branch here: if there is not an ok property in my parameter, then my API call was unsuccessful. hence throw an error and show the statusText property. Else return dinoResponse and call a .json() method on it

                if (!dinoResponse.ok) {
                    throw Error(dinoResponse.statusText);
                    // after throwing this error object, 
                }
                return dinoResponse.json();
            })
            // the catch block where I handled the error I threw in my code above
            .catch(function (error) {
                return error;
            })

    }
}