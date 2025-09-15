from playwright.async_api import Page

class LoginPage:

     def __init__(self, page: Page):
          self.page = page
          self.user_inp = "input[id='id']"
          self.password_inp = "input[id='contraseña']"
          self.login_button = '//*[@id="root"]/div/div[1]/div/div[2]/button'
          self.error_msg = "//div[@role='status' and @aria-live='polite']"

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
               self.page.wait_for_url("**/home/**", timeout=5000)
               return "/home/" in self.page.url
          except:
               return False
