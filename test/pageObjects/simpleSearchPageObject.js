const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
    console.log(“I am on Student Beans Home page”);
  }
  
  acceptCookies() {
    //Clicks accept cookies button
    const cookies = await driver.findElement(By.xpath(“//div[@id=‘onetrust-button-group’]/button[2]"));
    cookies.click();
  }
  
  clickSearchBarStartTyping() {
    // Click search bar in Home page
    const searchBar =this.isElementClicked(By.xpath(“//div[@class=‘_1avdemu’]”));
    searchBar.click();
  }
  
 verifySearchBarStartTyping() {
    // Verify the search bar
    var currentURL = driver.getCurrentUrl().toString();
   
    console.log("***>>> getCurrentUrl: “+currentURL);
    this.isElementExist((By.xpath(“//input[@class='_1g5dvk1']"));
  }

 enterSearchBar(string) {
    //Enter the input value in the search bar
    const inputValue =(By.xpath(“//input[@class=‘_1g5dvk1’)].setValue(string)
  }

displaySamsungList(string) {
    //Verify and display list
    this.isElementExist($('//*[text()[contains(.,${string})]]'));

    Var element = driver.findElements(By.xpath("//div[@class='_dyvdsb']/span['_63p46ei']"));
    driver.findElements(By.xpath(“//div[@class='_dyvdsb']")).then(function(elements)
      {
       elements.forEach(function (element) 
        {
          element.getText().then(function(text)
          {
            console.log(text.size();
            console.log(text);
          }
        }
      }
    }
 module.exports = simpleSearchPageObject
