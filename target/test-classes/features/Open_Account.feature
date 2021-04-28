@NewAccount @Smoke
Feature: Open a new account using scenario outline

Scenario Outline: User should be able to open a new account 
	When User enters "<username>" and "<password>"   
	And User clicks on SignIn button   
	Then User should land on Dashboard page 
	And User click on Bank and Cash 
	And User clicks on new Account
	Then User enters new Account details "<accountTitle>"           
	Then User enters additional Account details "<description>"  
	Then User enters initial balance "<initial balance>" 
	Then User enters account number "<account number>"
	Then User enters contact person "<contact person>"  
	Then User enters phone "<phone>"
	Then User enters url "<url>"
	Then user clicks submit button
	Examples:
		| username			| password	| accountTitle| description | initial balance| account number| contact person | phone      | url         |
		| demo@techfios.com	| abc123	| checkings	  | for grocery | 459            | 09998769      |	 Mr Yinkaa    | 7809578686 | www.bmo.com | 	
		