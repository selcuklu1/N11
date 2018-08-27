package stepdefs;
 
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
 


public class StepDefinitions {
	
	private WebDriver driver;
	String name="";
	String girisYap = "div[class=\"loginStatus\"] > a[href=\"https://www.n11.com/giris-yap\"] ";
	String email = "[id=\"email\"]";
	String password = "[id=\"password\"]";
	String loginButton = "[id=\"loginButton\"]";
	String loggedIn = "a[href=\"https://www.n11.com/hesabim\"]";
	String searchData = "[id=\"searchData\"]";
	String searchButton = "a[class=\"searchBtn\"]";
	String resultText = "div[class=\"resultText \"]";
	String pagination = "div[class=\"pagination\"]";
	String origpaginationLink = "a[href=\"https://www.n11.com/arama?q=samsung&pg=2\"]";
	String paginationLink = "a[href=\"https://www.n11.com/arama?q=samsung&pg=";
	String samsungProducts = "li[class=\"column \"]";
	String favorilereEkle = "[title=\"Favorilere ekle\"]";
	String hesabımLink = "a[href=\"https://www.n11.com/hesabim\"][class=\"menuTitle \"]";
	String breadCrumb = "div[id=\"breadCrumb\"]";
	String linkIsteklerim = "a[href=\"https://www.n11.com/hesabim/istek-listelerim\"]";
	String linkFavorilerim = "a[href=\"https://www.n11.com/hesabim/favorilerim\"]";
	String deleteFavoriteList = "span[class=\"deleteProFromFavorites\"]";
	String logoutLink = "a[href=\"https://www.n11.com/cikis-yap\"]";
	String productId;
	
  @Given("^Selected browser as \"(.*)\"$")
  public void driverSetUp(String browserName)
  {
	  
	  if(browserName.equals("chrome")){
		  System.setProperty("webdriver.chrome.driver", "C://WebDrivers//chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  driver.manage().window().maximize();		
	  }
	  
	  if(browserName.equals("firefox")){
		  System.setProperty("webdriver.gecko.driver", "C://WebDrivers//geckodriver.exe");
      	  driver = new FirefoxDriver();
      	  driver.manage().window().maximize();
	  }
  }
    @Given("^I am on the \"([^\"]*)\" page on URL \"([^\"]*)\"$")
    public void openURL(String companyName, String url) throws Throwable {
        driver.get(url);
    }
    
    @Then("^I check \"(.*)\" message$")
    public void checkTitle(String pageTitle) throws Throwable {
    	Assert.assertEquals("N11 Landing Page Title", pageTitle, driver.getTitle());
    }
    
    @When("^I click girisYap link$")
    public void clickLink() throws Throwable {
    	driver.findElement(By.cssSelector(girisYap)).click();
    }
    
    @Then("^I check \"(.*)\" page is open$")
    public void checkLoginPage(String pageTitle) throws Throwable {
//    	System.out.println(driver.getTitle());
    	Assert.assertEquals("N11 Login Page Title", pageTitle, driver.getTitle());
    }

    @When("^I logged in with username as \"(.*)\" and password as \"(.*)\"$")
    public void login(String username,String pass) throws Throwable {
//    	System.out.println(loginLink + " " + username + " " + password);
    	driver.findElement(By.cssSelector(email)).sendKeys(username);
    	driver.findElement(By.cssSelector(password)).sendKeys(pass);
    	driver.findElement(By.cssSelector(loginButton)).click();
    }
    
    @Then("^I check if logged in$")
    public void checkIfLogin() throws Throwable {
    	Assert.assertEquals("N11 Login Failed", driver.findElements(By.cssSelector(loggedIn)).size()>0,true);
    }
    
    @When("^I search for \"(.*)\"$")
    public void searchFor(String sData) throws Throwable {
    	driver.findElement(By.cssSelector(searchData)).sendKeys(sData);
    	driver.findElement(By.cssSelector(searchButton)).click();
    }
    
    @Then("^I found result more than \"(.*)\"$")
    public void checkResultCount(int resultCount) throws Throwable {
    	String result = driver.findElement(By.cssSelector(resultText)).getText();
    	String [] resultArray = result.split(" ");
    	Assert.assertEquals("Samsung Result Count:" + str2Int(resultArray[1]) , str2Int(resultArray[1]) > resultCount, true);
//    	Integer.parseInt(resultCount);
    }
    
    @When("^I select page \"(.*)\"$")
    public void searchFor(int pageCount) throws Throwable {
    	paginationLink += pageCount + "\"]";
    	driver.findElement(By.cssSelector(paginationLink)).click();
    }
    @Then("^I check if selected page \"(.*)\" and \"(.*)\"$")
    public void checkPage(String keyword,String pageCount) throws Throwable {
        String pageURL = "q=" + keyword + "&pg=" + pageCount;
    	Assert.assertEquals("Samsung search result page 2: ", driver.getCurrentUrl().contains(pageURL), true);
    }
    
    @When("^I select product at order \"(.*)\" and add favorites$")
    public void selectProductAndAddFavorites(int productOrder) throws Throwable {
//    	driver.findElements(By.cssSelector(samsungProducts)).get(productOrder-1).findElement(By.cssSelector("[title=\"Favorilere ekle\"]"));
    	productId = driver.findElements(By.cssSelector(favorilereEkle)).get(productOrder-1).getAttribute("data-productid");
    	System.out.println("productid first place" + productId);
    	driver.findElements(By.cssSelector(favorilereEkle)).get(productOrder-1).click(); 	
    }
       
    @When("^I click hesabım link$")
    public void clickHesabım() throws Throwable {
    	driver.findElement(By.cssSelector(hesabımLink)).click();
    }
    
    @Then("^I control hesabım screen$")
    public void checkBreadCrumb() throws Throwable {
    	Assert.assertEquals("Hesabım Page Control",driver.findElement(By.cssSelector(breadCrumb)).getText().contains("Hesabım"),true);
    }
    
    @When("^I click Istek Listelerim and click Favorilerim$")
    public void clickListelerimAndFavorilerim() throws Throwable {
    	driver.findElements(By.cssSelector(linkIsteklerim)).get(1).click();
    	driver.findElement(By.cssSelector(linkFavorilerim)).click();
    }
    
    @Then("^I control Favorilerim page is open$")
    public void checkIfFavoriPageisOpen() throws Throwable {
    	Assert.assertEquals("Favorilerim Page is Opened",driver.getCurrentUrl().contains("favorilerim"),true);
    }
    
    @Then("^I check selected product added to Favorite List$")
    public void checkFavoriteList() throws Throwable {
    	System.out.println("productid second place" + productId);
    	Assert.assertEquals("Favorite List Product Control", driver.findElements(By.cssSelector("div[id=\"p-" + productId + "\"]")).size(),1);
    }
    
    @When("^I delete product from Favorite List$")
    public void deleteFromFavoriteList() throws Throwable {
    	driver.findElement(By.cssSelector(deleteFavoriteList)).click();
    	JavascriptExecutor executor = (JavascriptExecutor)driver;
    	WebElement element = driver.findElement(By.cssSelector("span[class=\"btn btnBlack confirm\"]"));
    	executor.executeScript("arguments[0].click();", element);
    	Thread.sleep(4000);
    }
    
    @Then("^I check deleted product from Favorite List$")
    public void checkDeletedFavoriteList() throws Throwable {
    	System.out.println("productid third place" + productId);
    	Assert.assertEquals("Favorite List Product Control", driver.findElements(By.cssSelector("div[id=\"p-" + productId + "\"]")).size(),0);
    }
    
    @When("^I logged out$")
    public void logout() throws Throwable {
//    	driver.findElement(By.cssSelector(loggedIn)).click();
    	Actions action = new Actions(driver);
    	WebElement we = driver.findElement(By.cssSelector(loggedIn));
    	action.moveToElement(we).build().perform();
    	Thread.sleep(2000);

    	driver.findElement(By.cssSelector(logoutLink)).click();
    }
    
    @When("^browser close$")
    public void closeBrowser() throws Throwable {
    	driver.quit();
    }

    
    static public Integer str2Int(String str) {
        Integer result = null;
        if (null == str || 0 == str.length()) {
            return null;
        }
        try {
            result = Integer.parseInt(str);
        } 
        catch (NumberFormatException e) {
            String negativeMode = "";
            if(str.indexOf('-') != -1)
                negativeMode = "-";
            str = str.replaceAll("-", "" );
            if (str.indexOf('.') != -1) {
                str = str.substring(0, str.indexOf('.'));
                if (str.length() == 0) {
                    return (Integer)0;
                }
            }
            String strNum = str.replaceAll("[^\\d]", "" );
            if (0 == strNum.length()) {
                return null;
            }
            result = Integer.parseInt(negativeMode + strNum);
        }
        return result;
    }
 
}