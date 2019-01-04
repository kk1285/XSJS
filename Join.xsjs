var conn = $.db.getConnection();
var id_name={};
var output=[];
var getQuery = 'select * from "KIRAN"."Employee" inner join  "KIRAN"."empdetails" on  "KIRAN"."Employee"."EMPLOYEE_ID"= "KIRAN"."empdetails"."EMPLOYEE_ID";';
$.trace.error(getQuery);
var resultSet = conn.prepareStatement(getQuery).executeQuery();
var id=0,nam='Does not Exist';
while(resultSet.next()){
    id_name.id = resultSet.getString(1);
    id_name.name = resultSet.getString(2);
    id_name.grade = resultSet.getString(4);
    id_name.city = resultSet.getString(3);
    output.push(id_name);
    id_name={};
}
$.response.status=$.net.http.OK;
$.response.setBody(JSON.stringify(output));