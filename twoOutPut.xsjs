var conn = $.db.getConnection();
var id_name={};
var id_name1={};
var output=[];
var output1=[];
var getQuery = 'select * from "KIRAN"."TRAINING"';
var getQuery1= 'select * from "KIRAN"."empdetails"';
$.trace.error(getQuery);
$.trace.error(getQuery1);

var resultSet = conn.prepareStatement(getQuery).executeQuery();
var id=0,nam='Does not Exist';

var resultSet1 = conn.prepareStatement(getQuery1).executeQuery();
//var id1=0,grade='Does not Exist';

while(resultSet.next()){
    id_name.id = resultSet.getString(1);
    id_name.name = resultSet.getString(2);
    output.push(id_name);
    id_name={};
}

while(resultSet1.next()){
    id_name1.id = resultSet1.getString(1);
    id_name1.grade = resultSet1.getString(2);
    id_name1.rank = resultSet1.getString(3);
    output1.push(id_name1);
    id_name1={};
}
var response = {
    "T1": output,
    "T2":output1
};
$.response.status=$.net.http.OK;
$.response.setBody(JSON.stringify(response));
