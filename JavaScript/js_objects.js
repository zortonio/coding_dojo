// Challenge 1
let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

for(let student in students){
  console.log('Name: '+students[student].name+', Cohort: '+students[student].cohort);
}

// Challenge 2
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

 for(let user in users){
   console.log(user.toUpperCase());
   for(let i = 0; i < users[user].length; i ++){
     let combined = users[user][i].last_name + users[user][i].first_name;
     console.log((i+1)+' - '+users[user][i].last_name.toUpperCase()+', '+users[user][i].first_name.toUpperCase()+' - '+combined.length)
   }
 }
