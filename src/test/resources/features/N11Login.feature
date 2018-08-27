# language: en
@N11-TestFavoriteList
Feature: N11-Login,Add and Delete Favorite List,Logout
 

  Scenario: Successful login
  		Given Selected browser as "firefox"
      When I am on the "N11" page on URL "https://www.n11.com/"
      Then I check "n11.com - Alışverişin Uğurlu Adresi" message
      
      When I click girisYap link
      Then I check "Giriş Yap - n11.com" page is open
      
      When I logged in with username as "serdarkayis@gmail.com" and password as "giresun123"
      Then I check if logged in

			When I search for "samsung"
			Then I found result more than "0"

			When I select page "2"
			Then I check if selected page "samsung" and "2"
			
			When I select product at order "3" and add favorites
		  When I click hesabım link
		  Then I control hesabım screen

			When I click Istek Listelerim and click Favorilerim
			Then I control Favorilerim page is open
			Then I check selected product added to Favorite List
			
			When I delete product from Favorite List
			Then I check deleted product from Favorite List
			
			When I logged out
			Then browser close

