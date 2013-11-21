http://www.javascriptkit.com/javatutors/arraysort2.shtml

Sorting an array of objects
```javascript
var employees=[]
employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}
             
```
Sort by employee age
```javascript
employees.sort(function(a, b){
 return a.age-b.age
})
             
```
Sort by employee name
```javascript
employees.sort(function(a, b){
 var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
 if (nameA < nameB) //sort string ascending
  return -1 
 if (nameA > nameB)
  return 1
 return 0 //default return value (no sorting)
})
             
```
Sort by date (retirement date)
```javascript
employees.sort(function(a, b){
 var dateA=new Date(a.retiredate), dateB=new Date(b.retiredate)
 return dateA-dateB //sort by date ascending
})        
```
