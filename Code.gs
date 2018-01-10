/** 
 * Finds the council/s listed on the planning website.
 *
 * @param {title} input the title to find council on Major Projects Website.
 * @return the Council/s.
 * @customfunction
 */

function COUNCIL(projectId) {

//check the cell is not empty

//  if (projectId === "") {
//  return "";
//  }
      
 //extract the project ID from the title - NOT NEEDED when you use the Project ID
  
 // var regExp = new RegExp("[0-9]+[0-9]+[0-9]+[0-9]+");
 //var projectId =  regExp(title); 

//  Logger.log(projectId)

//check we have a project ID
    if (projectId === null){
   return "No Project ID found";
   }
   
// create the webpage address for the project
 
   var url = "http://majorprojects.planning.nsw.gov.au/index.pl?action=view_job&job_id=" + projectId;
   
//   Logger.log(url)
  
    var fromText = '<td class="label_td">Local Government</td>';
    var toText = '</td>';
    
    var content = UrlFetchApp.fetch(url).getContentText();
   
// check there is content at the website 
//(if there is an error takes you to a landing page with Introduction)
   
   var contentCheck = content.match("find out information on development proposals which are currently being assessed by the Department");
//   Logger.log(contentCheck);
   
   if (contentCheck !== null){
        return "No Project site found";
    }
       
 // check if it is more that on council
    
    var council2 = content.match('class="label_td">Local Governments'); 
      
    if (council2 !== null){
        var fromText = '<td class="label_td">Local Governments</td>';
    }

    var scraped = Parser
                    .data(content)
                    .from(fromText)
                    .to(toText)
                    .build();

    var council = scraped.replace ("<td> ", "").trim();
    var c2 = council.match('br'); 
            
    if (c2 === null){
        return council;
    }
    var councils = council.replace(/  <br\/>/g, ",").trim();      
    return councils;
     
}

/*
*  Modified from 
*  @author Ivan Kutil
*  @library_key: M1lugvAXKKtUxn_vdAG9JZleS6DrsjUUV  >Resources >Libraries...
*
*  http://www.kutil.org/2016/01/easy-data-scrapping-with-google-apps.html
*
*
*  Modified to a customFunction 
*  Scrape council names from Major Projects website
*  By Graeme A White 
*/
