const getNumberOfPages = (number, numberOfPostOnPage) => {
    if(number % numberOfPostOnPage){
      return Math.floor(number/numberOfPostOnPage)+1
    }
    return number/numberOfPostOnPage
  }

  export {getNumberOfPages}