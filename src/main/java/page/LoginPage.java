package page;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BasePage {
	// Third step is to define the page
	// create element library and interactive methods
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	// WHEn the BY Class don't come up automatically
	// Remove the closing bracket, they will appear 
	@FindBy(how=How.XPATH, using="//input[@id='username']") WebElement USERNAME_FIELD;
	@FindBy(how=How.XPATH, using="//input[@id='password']") WebElement PASSWORD_FIELD;
	@FindBy(how=How.XPATH, using="//button[@name='login']") WebElement SIGNIN_BUTTON;
	@FindBy(how=How.XPATH, using="//span[text()='Bank & Cash']") WebElement BANK_CASH_BUTTON;
	@FindBy(how=How.XPATH, using="//a[text()='New Account']") WebElement NEWACCOUNT_BUTTON;
	@FindBy(how=How.XPATH, using="//input[@id='account']") WebElement ACCOUNT_TITLE_FIELD;
	@FindBy(how=How.XPATH, using="//input[@id='description']") WebElement DESCRIPTION_FIELD;
	@FindBy(how=How.XPATH, using="//input[@class='form-control amount']") WebElement INITIAL_BALANCE_FIELD;
	@FindBy(how=How.XPATH, using="//input[@name='account_number']") WebElement ACCOUNT_NUMBER_FIELD;
	@FindBy(how=How.XPATH, using="//input[@id='contact_person']") WebElement CONTACT_PERSON_FIELD;
	@FindBy(how=How.XPATH, using="//input[@name='contact_phone']") WebElement PHONE_FIELD;
	@FindBy(how=How.XPATH, using="//input[@name='ib_url']") WebElement BANKING_URL_FIELD;
	@FindBy(how=How.XPATH, using="//button[@class='btn btn-primary']") WebElement SUBMIT_ACCOUNT_BUTTON;
	
	// Interactive Methods

	// THIS METHOD IS DONE INDIVIDUALLY
	public void insertUserName(String userName) {
		USERNAME_FIELD.sendKeys(userName);
	}
	
	public void insertPassword(String password) {
		PASSWORD_FIELD.sendKeys(password);
	}

	public void enterCredentials(String userName, String password) {
		USERNAME_FIELD.sendKeys(userName);
		PASSWORD_FIELD.sendKeys(password);
		
	}
	public void clickSignInButton() {
		SIGNIN_BUTTON.click();
		
	}
	
	public void clickBankandCash () {
		waitForElement(driver,10, BANK_CASH_BUTTON);
		BANK_CASH_BUTTON.click();
		
	}
	
	public void clickNewAccount() {
		waitForElement(driver, 10,NEWACCOUNT_BUTTON );
		NEWACCOUNT_BUTTON.click();
		
	}
	
	public void insertAccountTitle(String accountTitle) {
		waitForElement(driver, 10,ACCOUNT_TITLE_FIELD);
		ACCOUNT_TITLE_FIELD.sendKeys(accountTitle);
		
	}
	
	public void insertDescription(String description) {
		DESCRIPTION_FIELD.sendKeys(description);
	}
	
	public void insertInitialBalance(String iBalance) {
		waitForElement(driver, 10,INITIAL_BALANCE_FIELD );
		INITIAL_BALANCE_FIELD.sendKeys(iBalance);
		
	}
	
	public void insertAccountNumber(String accountNumber) {
		waitForElement(driver,10, ACCOUNT_NUMBER_FIELD);
		ACCOUNT_NUMBER_FIELD.sendKeys(accountNumber);
		
	}
	
	public void insertContactPerson(String contactPerson) {
		CONTACT_PERSON_FIELD.sendKeys(contactPerson);
	}
	
	public void insertPhoneNumber(String phoneNumber) {
		PHONE_FIELD.sendKeys(phoneNumber);
	}
	
	public void insertBankingUrl(String url) {
		BANKING_URL_FIELD.sendKeys(url);
	}
	
	public void clickSubmitButton(String submit) {
		waitForElement(driver,5,SUBMIT_ACCOUNT_BUTTON);
		SUBMIT_ACCOUNT_BUTTON.click();
	}
	
	
	
	public String getPageTitle() {
		return driver.getTitle();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public void takeScreenshotAtEndOfTest(WebDriver driver) throws IOException {
		TakesScreenshot ts = ((TakesScreenshot)driver);
		SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String label = formatter.format(date);
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		String currentDirectory = System.getProperty("user.dir");
		FileUtils.copyFile(sourceFile, new File(currentDirectory +"/screenshots/" + label + ".png"));
	}





}
