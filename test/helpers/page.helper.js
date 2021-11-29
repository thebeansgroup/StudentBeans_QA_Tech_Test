const clickPageElement = async (element, timeout) => {
    const pageElement = await element
        await pageElement.waitForClickable({timeout})
        pageElement.click()
};

const isTextShownForElement = async (element, text, timeout) => {
    browser.waitUntil(async () => {
        const textElement = element
        return textElement.getHTML().then(t => {
            expect(t).to.include(text)
        })
    }, {
        timeout: timeout,
        timeoutMsg: `The text, namely: "${text}" was not displayed on screen as expected`
    });
};

const addTextToInput = async (element, text, timeout) => {
    browser.waitUntil(async () => {
        const inputElement = element
          return inputElement.setValue(text).then(() => {
              expectChai(inputElement.getValue()).to.equal(text);
          }, {
          timeout: timeout,
          timeoutMsg: `The given text, namely ${text} was not added to the given input`
        })
      })
    }

const isPageElementHasFocus = async (element, timeout) => {
    browser.waitUntil(async () => {
        const input = await element
        return input.isFocused().then(v => {
          expect(v).to.be(true)
        })
      }, {
        timeout: timeout,
        timeoutMsg: 'The given element does not have focus as expected'
    });
}

const assertFirstResultLinkContainsSearchTerm = async (elements, searchTerm, timeout) => { 
    browser.waitUntil(async () => { 
        const results = elements 
        return results[0].getAttribute('href').then(link => { 
            expect(link).to.include(searchTerm.toLowerCase()) 
        })
    }, { 
        timeout: timeout,
        timeoutMsg: `The search term, namely: "${searchTerm.toLowerCase()}" was not found in the first result returned`
    });
};

module.exports = { 
    clickPageElement, 
    isTextShownForElement, 
    isPageElementHasFocus,
    addTextToInput,
    assertFirstResultLinkContainsSearchTerm
}