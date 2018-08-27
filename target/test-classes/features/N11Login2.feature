# language: tr
@ParaTransferi 
Özellik: GarantiEmeklilik
 
  #Geçmiş: User navigates to Company home page
    #Diyelim ki I am on the "Garanti Emeklilik" page on URL "https://www.n11.com/"
    #O zaman I should see "Page Title" message
 
  Senaryo: Successful login
      Diyelim ki I am on the "Garanti Emeklilik" page on URL "https://www.n11.com/"
      O zaman I should see "Page Title" message
      










    #When I fill in "Username" with "Test"
    #And I fill in "Password" with "123"
    #And I click on the "Log In" button
    #Then I am on the "My profile" page on URL "www.mycompany.com/myprofile"
    #And I should see "Welcome to your profile" message
    #And I should see the "Log out" button
 #
  #Scenario Outline: Failed login using wrong credentials
    #When I fill in "Username" with "<username>"
    #And I fill in "Password" with "<password>"
    #And I click on the "Login" button
    #And I should see "<warning>" message
    #Examples:
      #| username    | password   | warning                           |
      #| Test        | !23        | Incorrect credentials. Try again! |
      #| Tset        | 123        | Incorrect credentials. Try again! |
      #| Tset        | !23        | Incorrect credentials. Try again! |
      #| Test        |            | Please enter password.            |
      #|             | 123        | Please enter username.            |
      #|             |            | Please enter your credentials.    |