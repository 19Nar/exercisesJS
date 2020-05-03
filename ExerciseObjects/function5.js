/*
Write a function that takes an array of nicknamed works 
by Beethoven (objects with op, nickname, and genre properties, all non-empty strings) 
and returns an object whose keys are the pluralized genres and 
whose values are arrays of the corresponding work-objects, 
with each array sorted alphabetically by nickname (and secondarily 
    by op in the case of a shared nickname—more on this below).
To pluralize a genre, just add an "s", with the exception of "symphony" (pl. "symphonies").
Each nickname has headline-style capitalization (the first letter of each word is uppercase).
Opus-number strings (op) always begin with an integer, but some opuses contain more than one work. 
In that case, a work's op string will end either with a lowercase letter (e.g., "81a") 
or with a slash followed by another integer (e.g., "27/1"). (For a given opus 
    that contains more than one work, either the lettering scheme or the numbering scheme is used—never both.)
A single nickname may apply to an entire opus that contains multiple works of the same genre. 
Such works should be sub-sorted by their full op strings 
(so "1a" would precede "1b", and "1/1" would precede "1/2").
Try to keep your code abstract! With the exception 
of the "symphony" genre, you don't have to know any of the values of the input-data to complete this challenge.

*/



const plural = w => w === 'symphony' ? 'symphonies' : w + 's';        // make a plural of work-objects 
                                                                    //by mentioning the exception of symphony
const sortByGenre = works => [...new Set(works.map(b => b.genre))]   // get a new Set by mapping 
                                                                    //according to genres
  .reduce((a,h) => (a[plural(h)] = works.filter(b => b.genre === h) // Filter the works 
    .sort((x,y) => x.nickname.localeCompare(y.nickname) ||          // by comparing the nicknames
      x.op.localeCompare(y.op)), a), {});

      
      

      The sort() method sorts the elements of an array in place and returns the sorted array. 

      The Set object lets you store unique values of any type, whether primitive values or object references.
      Set objects are collections of values. You can iterate through the elements of a set in insertion order. 
      A value in the Set may only occur once; it is unique in the Set's collection.

      The map() method creates a new array populated with the results of calling a provided 
      function on every element in the calling array.

      The filter() method creates a new array 
      with all elements that pass the test implemented by the provided function.

      The localeCompare() method returns a number indicating 
      whether a reference string comes before, or after, or is the same as the given string in sort order.

