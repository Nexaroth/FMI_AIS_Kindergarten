package uni.fmi.apply;

import java.util.ArrayList;
import java.util.List;

import uni.fmi.models.Kid;

public class ApplyService {

	
	private static List<Kid> kidsDB= new ArrayList<Kid>();
	public static String apply(String kidName, int hasWorkingParents, boolean hasDisability, boolean hasTwin,
			boolean hasSibling) {
		
		if(!kidName.isBlank() && hasWorkingParents==1 && hasDisability==true && hasTwin==true && hasSibling==true) {
			return "Applied successfuly! Advantage points: 5";
		}
		
		if(!kidName.isBlank() && hasWorkingParents==0 && hasDisability==true && hasTwin==true && hasSibling==true) {
			return "Applied successfuly! Advantage points: 4";
		}
		
		if(kidName.isBlank()) {
			return "Please enter name!";
		}
		
		if(!kidName.isBlank() && hasWorkingParents==1 && hasDisability==false) {
			return "Applied successfuly! Advantage points: 3";
		}
		
		if(!kidName.isBlank() && hasWorkingParents==0 && hasDisability==false && hasTwin==false) {
			return "Applied successfuly! Advantage points: 1";
		}
		
		
		final Kid newKid = new Kid(kidName, hasWorkingParents, hasDisability, hasTwin, hasSibling);
		kidsDB.add(newKid);
		return "Applied successfuly! Advantage points: 6";
	}

	
}
