class RegistrationPageObject {
    //Selectors
    get emailInput () {return $('[name="email"]')}
    get passwordInput () {return $('[name="password"]')}
    get validationErrorAlert () {$('[data-testid="input-alert"]')}

    async emailDataValidationError(errorMsg) {
        const emailInput = await $('[name="email"]')
        const passwordInput = await $('[name="password"]')
        const inputAlert = await $('[data-testid="input-alert"]')
        await passwordInput.click()
        await expect(inputAlert.getText()).toContain(errorMsg)
        await emailInput.clearValue()
    }

    async passwordDataValidationError(errorMsg) {
        const emailInput = await $('[name="email"]')
        const passwordInput = await $('[name="password"]')
        const inputAlert = await $('[data-testid="input-alert"]')
        await emailInput.click()
        await expect(inputAlert.getText()).toContain(errorMsg)
        await passwordInput.clearValue()
    }

    async dataValidationError(fieldType, errorMsg) {
        if (fieldType === 'email') {
            await this.passwordInput.click()
            await expect(this.validationErrorAlert.getText()).toContain(errorMsg)
            await this.emailInput.clearValue()
        } else if (fieldType === 'password') {
            await this.emailInput.click()
            await expect(this.validationErrorAlert.getText()).toContain(errorMsg)
            await this.passwordInput.clearValue()
        }
    }
}

module.exports = RegistrationPageObject