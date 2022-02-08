package uni.fmi.apply;

import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.apply.model.ApplyScreenModel;

public class ApplySteps {
	
	
	private ApplyScreenModel applyScreenModel;

	@Given("^Kid applies for kindergarten$")
	public void applicationScreen() throws Throwable {
	    applyScreenModel=new ApplyScreenModel();
	}

	@When("^Entered kids name: \"([^\"]*)\"$")
	public void addKidName(final String kidName) throws Throwable {
	    applyScreenModel.setKidName(kidName);
	}

	@When("^Has working parents: \"([^\"]*)\"$")
	public void addHasWorkingParents(final int hasWorkingParents) throws Throwable {
	    applyScreenModel.setHasWorkingParents(hasWorkingParents);
	}

	@When("^has disability: \"([^\"]*)\"$")
	public void addHasDisability(final boolean hasDisability) throws Throwable {
	   applyScreenModel.setHasDisability(hasDisability);
	}

	@When("^has twin: \"([^\"]*)\"$")
	public void addHasTwin(final boolean hasTwin) throws Throwable {
	    applyScreenModel.setHasTwin(hasTwin);
	}

	@When("^has sibling: \"([^\"]*)\"$")
	public void addHasSibling(final boolean hasSibling) throws Throwable {
	    applyScreenModel.setHasSibling(hasSibling);
	}

	@When("^clicks on the application button$")
	public void clickApplicationButton() throws Throwable {
	   applyScreenModel.clickApplicationButton();
	}

	@Then("^a message pops up: \"([^\"]*)\"$")
	public void messagePopsUp(final String message) throws Throwable {
	    assertEquals(message, applyScreenModel.getMessage());
	}
}
