// Update the first matching record
coll.update({nationality: 'irish'}, {$set: {hair_colour: 'blue'}})

// Update all matching records
coll.update({nationality: 'irish'}, {$set: {hair_colour: 'purple'}},{multi:true})

// Delete a record that has a `first` of `kate` and a `last` of `bush`
coll.remove({first: 'kate', last: 'bush'})
