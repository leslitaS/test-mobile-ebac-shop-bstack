
class MyStore {
        get #myStoreName() { return $('id:toolbar_subtitle');}      
        get #myStoreLogo() { return $('~My store');}    
    
        async getStoreName(){
         return await this.#myStoreName().getText()        
          
        }
        async getMyStoreLogoIsDisplayed(){
         await this.#myStoreLogo().waitForExist()     
         return await this.#myStoreLogo().isDisplayed()     
          
        }

}

module.exports = new MyStore();