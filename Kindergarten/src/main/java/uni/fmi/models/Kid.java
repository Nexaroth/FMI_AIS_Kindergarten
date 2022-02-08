package uni.fmi.models;

public class Kid {

	private String kidName;
	private int hasWorkingParents;
	private boolean hasDisability;
	private boolean hasTwin;
	private boolean hasSibling;


	public Kid(
			final String kidName,
			final int hasWorkingParents,
			final boolean hasDisability,
			final boolean hasTwin,
			final boolean hasSibling) {
		this.kidName=kidName;
		this.hasWorkingParents=hasWorkingParents;
		this.hasDisability=hasDisability;
		this.hasTwin=hasTwin;
		this.hasSibling=hasSibling;
	}
	
	


	
}