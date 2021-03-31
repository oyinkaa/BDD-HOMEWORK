@Login
Feature: Validate Techfios Login functionality

Background: 
Given User is on the Techfios login page            

@Scenario1
Scenario: User should be able to login with valid credentials
When User enters username as "demo@techfios.com"
When User enters password as  "abc123"       
And User clicks on SignIn button           
Then User should land on Dashboard page    


