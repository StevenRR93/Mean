let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var i in students){
  var str = "";
    for (var j in students[i]){
        str += j + ": " + students[i][j]+ " ";
    }
    console.log(str);
}
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 for (var i in users){
   console.log(i.toUpperCase());
   for (var j in users[i]){
     var str = "";
     count = 0;
     for (var k in users[i][j]){
       str =  users[i][j][k].toUpperCase() + str;
       if (k === "first_name"){
         str = ", " + str;
       }
       count += users[i][j][k].length;
    }
    console.log(j + " - " +str + " - " + count);
   }
}