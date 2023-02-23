const a = 5
const b = 8



  const getNumberOfPages = (number, numberOfPostOnPage) => {
    if(number % numberOfPostOnPage){
      return Math.floor(number/numberOfPostOnPage)+1
    }
    return number/numberOfPostOnPage
  }

  console.log(getNumberOfPages(11,5));
