//function for send weekly emails to DPI Branches

function weeklyEmail() {

  var sheet = SpreadsheetApp.openById("11iYTTWWjR1_In0TryvefX3MS3_VdlzPc0jZANmOe-UA");
  var data = sheet.getDataRange().getValues();

//Start at 1 for the real thing 15 for the test

  for (var i=1; i<data.length; i++) {
 
  var fname = data[i][0];
  var recipient = data[i][1]; 
  var bname = data[i][2];
  var url = data[i][3];
  var message = data[i][4];
  var sender = data[i][5];
 
  var subject = 'Upcoming and Overdue for ' +bname;
  var body = ('Dear %s, %s  Cheers %s       %s', recipient, message,fname, url);
 
 
  var bodyhtml = 'Dear '+fname +',<br><br> ' 
       +message +'<br><br>Cheers<br>' 
       +sender +'<br><br>'
       +'<a href="'+url +'">'+bname +'</a>'
       +'<br><br>'     
       +'<a style="color:rgb(0, 38, 100);">Planning Policy & Assessment Advice</a>' +'<br>'
       +'<a style="color:rgb(198,12,48);">NSW Department of Primary Industries | Strategy and Policy</a>'+'<br>' 
       +'<a style="color:rgb(0, 38, 100);">Level 49 MLC Centre | 19 Martin Place | Sydney NSW 2000</a>'+'<br>' 
       +'<a style="color:rgb(198,12,48);">T:</a>  +61 2 9934 0805'+' ' 
       +'<a style="color:rgb(198,12,48);">E:</a>  landuse.enquiries@dpi.nsw.gov.au'+'<br>'  
       +'<a style="color:rgb(198,12,48);">W:</a>  www.dpi.nsw.gov.au';
            
         
  MailApp.sendEmail(recipient, subject, body, {
  name: "PPAA Update Email", 
  htmlBody: bodyhtml, 
  replyTo: "landuse.enquiries@dpi.nsw.gov.au", 
    }); 
}
  
}
  
//@Author Graeme A White <graeme.white@dpi.nsw.gov.au> 