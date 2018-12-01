package automationFrameWork;

import java.io.FileReader;
import java.io.IOException;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import au.com.bytecode.opencsv.CSVReader;

public class TestWithSampleData {

	public static void main(String[] args)  throws InterruptedException, IOException {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//resources//chromedriver.exe");
		// TODO Auto-generated method stub
		CSVReader reader = new CSVReader(new FileReader(System.getProperty("user.dir")+"//resources//data.csv"));
		 // this will load content into list
		  List<String[]> li=reader.readAll();
		  Iterator<String[]> i1= li.iterator();
		    i1.next();
			 // Iterate all values 
		    WebDriver driver = new ChromeDriver();
	        //Launch the Website
			driver.get("http://localhost:3000/");
			WebElement inputName= driver.findElement(By.id("forname"));
			WebElement inputAge= driver.findElement(By.id("forage"));
			WebElement inputCountry= driver.findElement(By.id("forcountry"));
			WebElement inputGenderDropdown= driver.findElement(By.id("forgender"));
			WebElement createTicket= driver.findElement(By.xpath("//button[contains(text(),'Create Ticket')]"));
			WebElement genderOption;
			Calendar calbefore = Calendar.getInstance();
			 while(i1.hasNext()){ 	
			 String[] str=i1.next();
			 String name=str[0];
			 String age=str[1];
			 String country=str[2];
			 String gender=str[3];
			// System.out.println(name+"   "+age+"   "+country+"   "+gender);
			 inputName.clear();
			 inputName.sendKeys(name);
			 inputAge.clear();
			 inputAge.sendKeys(age);
			 inputCountry.clear();
			 inputCountry.sendKeys(country);
			 inputGenderDropdown.click();
			 genderOption=driver.findElement(By.xpath("//option[contains(text(),'"+gender+"')]"));
			 genderOption.click();
			 createTicket.click();
			}
			 Calendar calafter = Calendar.getInstance();
			 float timeTaken=(float)(calafter.getTimeInMillis()-calbefore.getTimeInMillis())/1000;
			 System.out.println("Time taken is " + timeTaken+" seconds");

		//Wait for 5 Sec
		Thread.sleep(5000);
		
        // Close the driver
        driver.quit();

	}

}
