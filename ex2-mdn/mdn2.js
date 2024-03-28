/* In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:
name: A string representing the band name.
nationality: A string representing the country the band comes from.
genre: What type of music the band plays.
members: A number representing the number of members the band has.
formed: A number representing the year the band formed.
split: A number representing the year the band split up, or false if they are still together.
albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
    name: A string representing the name of the album.
    released: A number representing the year the album was released.
*/

const band = {
  name: "U2",
  nationality: "Ireland",
  genre: "Rock",
  members: 4,
  formed: 1976,
  split: false,
  albums: [
    { name: "Under a Blood Red Sky", realesed: 1983 },
    { name: "Songs Of Surrender", realesed: 2023 },
  ],
};
