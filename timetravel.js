javascript:
var input = prompt("ENTER website address");
var waybackmachine = "https://web.archive.org/web/20220000000000*/" + input;
var archivetoday = "https://archive.ph/" + input;
var libraryofcongress = "https://www.loc.gov/web-archives/?q=" + input;
var vefsafn = "https://vefsafn.is/?page=wayback-results&site=" + input;
function openall() { 
	setTimeout(() => window.open(waybackmachine, "_blank"), 2000);
	setTimeout(() => window.open(archivetoday, "_blank"), 2000);
	setTimeout(() => window.open(libraryofcongress, "_blank"), 2000);
	setTimeout(() => window.open(vefsafn, "_blank"), 2000); 
}
openall(); 
setTimeout(() => window.alert("Thanks for the search", "_blank"), 3000); 