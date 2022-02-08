package uni.fmi.apply.model;

import uni.fmi.apply.ApplyService;

public class ApplyScreenModel {

	private String kidName;
	private int hasWorkingParents;
	private boolean hasDisability;
	private boolean hasTwin;
	private boolean hasSibling;
	private String message;

	public void setKidName(String kidName) {
		this.kidName=kidName;
		
	}

	public void setHasWorkingParents(int hasWorkingParents) {
		this.hasWorkingParents=hasWorkingParents;
		
	}

	public void setHasDisability(boolean hasDisability) {
		this.hasDisability=hasDisability;
		
	}

	public void setHasTwin(boolean hasTwin) {
		this.hasTwin=hasTwin;
		
	}

	public void setHasSibling(boolean hasSibling) {
		this.hasSibling=hasSibling;
		
	}

	public void clickApplicationButton() {
		message = ApplyService.apply(kidName,hasWorkingParents,hasDisability,hasTwin,hasSibling);
		
	}

	public String getMessage() {
		return message;
	}

}
