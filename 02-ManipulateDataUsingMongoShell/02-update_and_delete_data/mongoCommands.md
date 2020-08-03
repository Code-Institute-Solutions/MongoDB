#### Update the first matching record with nationality == "irish" to have hair_color == "blue":
- `coll.update({nationality: "irish"}, {$set: {hair_color: "blue"}});`


#### Update all matching records with nationality == "irish" to have hair_color == "purple":
- `coll.update({nationality: "irish"}, {$set: {hair_color: "purple"}},{multi:true});`


#### Delete a record matching: First: "kate", Last: "bush":
- `coll.remove({first: "kate", last: "bush"});`


#### Delete all records from the collection:
- `coll.remove();`
