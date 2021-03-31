package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class LoginStepDefinitios {
	WebDriver driver;
	LoginPage loginPage;
	
	@Before
	public void beforeRun() {
		driver = BrowserFactory.init();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		
	}
	@Given("^User is on the Techfios login page$")
	public void User_is_on_the_Techfios_login_page() throws Exception {
		
		driver.get("https://techfios.com/billing/?ng=admin/");
		
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		
		loginPage.insertUserName(username);
	}

	@When("^User enters password as  \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.insertPassword(password);
	}

	@When("^User clicks on SignIn button$")
	public void user_clicks_on_SignIn_button() {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		
	}
	
	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void User_enters_and(String username, String  password) {
		loginPage.enterCredentials(username, password);
	}
	

@Then("^User click on Bank and Cash$")
public void user_click_on_Bank_and_Cash() throws Exception {
    loginPage.clickBankandCash();
    Thread.sleep(2000);
}

@Then("^User clicks on new Account$")
public void user_clicks_on_new_Account() throws Exception {
    loginPage.clickNewAccount();
    Assert.assertEquals("Accounts- iBilling", loginPage.getPageTitle());
   
}


@Then("^User enters new Account details \"([^\"]*)\"$")
public void user_enters_additional_Account_details(String accountTitle) {
    loginPage.insertAccountTitle(accountTitle);
}

@Then("^User enters additional Account details \"([^\"]*)\"$")
public void user_enters_description(String description) {
   loginPage.insertDescription(description);
}


@Then("^User enters initial balance \"([^\"]*)\"$")
public void user_enters_initial_balance(String iBalance) throws InterruptedException {
    loginPage.insertInitialBalance(iBalance);
    
}

@Then("^User enters account number \"([^\"]*)\"$")
public void user_enters_account_number(String accountNumber) {
    loginPage.insertAccountNumber(accountNumber);
}

@Then("^User enters contact person \"([^\"]*)\"$")
public void user_enters_contact_person(String contactPerson)  {
  loginPage.insertContactPerson(contactPerson);
}

@Then("^User enters phone \"([^\"]*)\"$")
public void user_enters_phone(String phoneNumber)  {
	loginPage.insertPhoneNumber(phoneNumber);
}

@Then("^User enters url \"([^\"]*)\"$")
public void user_enters_url(String url) {
   loginPage.insertBankingUrl(url);
}

@Then("^user clicks submit button$")
public void user_clicks_submit_button(String submit) {
  loginPage.clickSubmitButton(submit);  
}



//@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
