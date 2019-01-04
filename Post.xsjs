var conn = $.db.getConnection();

var id = "13";
var nam = "Jack";

//To Escape Single Quotes
// var query = 'Insert into "KIRAN"."Employee" values(\''+id+ '\',\''+nam+'\')';
// var query = 'Insert into "KIRAN"."Employee" values('+id+',\''+nam+'\')';
//To Esacpe Double Quotes
var query = "Insert into \"KIRAN\".\"TRAINING\" values("+id+",'"+nam+"')";
var prepare = conn.prepareStatement(query);
prepare.execute();
conn.commit();

var response = {
  'Message' : 'Success'  
};

$.response.status=$.net.http.CREATED;
$.response.setBody(JSON.stringify(response));
// $.response.setBody(query);