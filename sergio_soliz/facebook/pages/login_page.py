from playwright.async_api import Page

class LoginPage:

     def __init__(self, page: Page):
          self.page = page
          self.user_inp = "input[id='email']"
          self.password_inp = "input[id='pass']"
          self.login_button = "button[data-testid='royal-login-button']"
          self.error_msg = '//*[@id="email_container"]/div[2]'

     def goto (self , base_url:str) :
          self.page.goto(base_url)

     def login (self , username:str , password:str) :
          self.page.fill(self.user_inp , username)
          self.page.fill(self.password_inp , password)
          self.page.click(self.login_button)

     def get_error_message(self) -> str:
          locator = self.page.locator(self.error_msg)
          try:
               locator.wait_for(state="visible", timeout=3000)  
               return locator.text_content()
          except:
               return ""

     def is_logged_in(self) -> bool:
          try:
               self.page.wait_for_url("https://www.facebook.com/*", timeout=10000)
               return "login" not in self.page.url
          except:
               return False
