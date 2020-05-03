/*
Explanation
You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.
Write a function which takes an id, a property (prop), and a value.
For the given id in collection:
If value is non-blank (value !== “”), then update or set the value for the prop.
If the prop is “tracks” and value is non-blank, check to see if the given element in the array has the property of “tracks”. If the element has the property of “tracks”, push the value onto the end of the “tracks” array. If the element does not have the property, create the property and value pair.
If value is blank, delete that prop.
Always return the entire collection object.
*/

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  function updateRecords(id, prop, value) {
    if(value === "") 
    delete collection[id][prop]; 
    else if(prop === "tracks") {
      collection[id][prop] = collection[id][prop] || []; // stays the same  collection[id][prop] = collection[id][prop]
      collection[id][prop].push(value);                  // or if it is empty - prop adds value
    } else {
      collection[id][prop] = value;
    }
  
    return collection;
  }
