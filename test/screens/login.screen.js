class LoginScreen{
    get #btnStoreAdress() { return $('id:button_login_store');} 
    get #lblSiteAdress() { return $('android.widget.EditText');} //id:textinput_placeholder
    get #btnContinue() { return $('id:bottom_button');}
    get #btnContinueWithStoreCredentials() { return $('id:bottom_button');}
    get #userName() { return $('//android.widget.EditText[1]');} //android=new UiSelector().text("Username")
    get #password() { return $('android=new UiSelector().text("Password")');}
    get #twoFactorPasswordBtn() { return $('id:login_enter_password');}
    

    async setStoreAddress(url){
        await this.#btnStoreAdress.click()
        await this.#lblSiteAdress.setValue(url)
        
    }
    async btnContinue(){
        await this.#btnContinue.click()
    }
    async btnContinueCredentialsStore(){
        await this.#btnContinueWithStoreCredentials.click()
    }

    async login(userName,password){
        await this.#userName.setValue(userName)
       // await this.#password.click()
        await this.#password.setValue(password)
        await this.#btnContinue.click()
    }

    async goToTwoFactorPasswordBtn(){
        await this.#twoFactorPasswordBtn.click()
    }

    async twoFactorPasswod(password){
        await this.#password.setValue(password)
        await this.#btnContinue.click()
    }

}
module.exports = new LoginScreen()