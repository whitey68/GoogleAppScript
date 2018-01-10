/** 
 * Finds the spreadsheet for each branch.
 *
 * @param {data} input the branch to display.
 * @return the short Url.
 * @customfunction
 */

function SURL(data) {
    var shorturl = ''; 
    
   switch (data)
    {
        case "Fisheries":
            shorturl = "https://goo.gl/7ikWgc";
            break;
        case "Agriculture":
            shorturl = "https://goo.gl/AdGMVm";
            break;
        case "Water":
            shorturl = "https://goo.gl/0MM1o3";
            break;
        case "Lands":
            shorturl = "https://goo.gl/mmWXkn";
            break;
        default:
            shorturl = "Unknown URL";
            break;
    }
      return shorturl
}
      
      
