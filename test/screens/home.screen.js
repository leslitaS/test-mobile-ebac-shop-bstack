let pacote = "com.woocommerce.android";

class HomeScreen {
  get #buttonSkip() {
    return $('id:button_skip');
  }

  async goToLogin() {
    await this.#buttonSkip.click();
  }
}

module.exports = new HomeScreen();
