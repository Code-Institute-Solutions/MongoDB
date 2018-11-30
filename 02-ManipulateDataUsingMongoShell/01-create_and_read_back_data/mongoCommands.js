// Show all collections in the current DB
show collections

// Use the `myFirstMDB` collection and store a reference to it in a
// variable called `coll`
coll = db.myFirstMDB;

// Create some data
coll.insert({
    first: 'john',
    last: 'lennon',
    dob: '09/10/1940',
    gender: 'm',
    hair_colour: 'brown',
    occupation: 'beatle',
    nationality: 'english'
});
coll.insert({
    first: 'eve',
    last: 'ryan',
    dob: '19/09/1992',
    gender: 'f',
    hair_colour: 'pink',
    occupation: 'developer',
    nationality: 'irish'
});
coll.insert({
    first: 'martha',
    last: 'fenton',
    dob: '15/05/1974',
    gender: 'f',
    hair_colour: 'brown',
    occupation: 'manager',
    nationality: 'irish'
});
coll.insert({
    first: 'Neil',
    last: 'Hanslem',
    dob: '14/07/1983',
    gender: 'm',
    hair_colour: 'blonde',
    occupation: 'actor',
    nationality: 'english'
});
coll.insert({
    first: 'Rocky',
    last: 'Persolm',
    dob: '19/12/1994',
    gender: 'f',
    hair_colour: 'black',
    occupation: 'activist',
    nationality: 'american'
});

// Find all of the documents in the collection
coll.find()

// Find all records that have a gender of `f`
coll.find({gender: 'f'})

// Find all records that have a gender of `f` and a
// nationality of `english`
coll.find({gender: 'f', nationality: 'english'})

// Find all records that have a gender of `f` and a
// nationality of `american` or `irish`
coll.find({gender: 'f', $or: [{nationality: 'american'}, {nationality: 'irish'}]})

// Find all records that have a gender of `f` and a
// nationality of `american` or `irish` and sort them in an
// ascending according to the nationality
coll.find({gender: 'f', $or: [{nationality: 'american'}, {nationality: 'irish'}]}).sort({nationality: 1});