//This function sets data validation to select a branch

function branchDataValidation() {
   var range = SpreadsheetApp.getActive().getRange('C2:C15');
   
   var validation = SpreadsheetApp.newDataValidation().requireValueInList(['Agriculture', 'Fisheries', 'Water', 'Lands'], true).build();
   
   range.setDataValidation(validation)
  }
