const data = [ { id:1, name:"David Lee Roth", bio: "David Lee Roth (born October 10, 1954) is an American rock musician, singer, songwriter and former radio personality. Best known for his wild, energetic stage persona, he was the lead singer of the hard rock band Van Halen across three stints, from 1974 to 1985, in 1996 and again from 2006 to their disbandment in 2020. He was also known as a successful solo artist, releasing numerous RIAA-certified Gold and Platinum albums. After more than two decades apart, Roth re-joined Van Halen in 2006 for a North American tour that became the highest-grossing in the band's history and one of the highest-grossing of that year. In 2012, Roth and Van Halen released the comeback album A Different Kind of Truth. In 2007, he was inducted into the Rock and Roll Hall of Fame as a member of Van Halen"},
{id:2, name: "Sammy Hagar", bio: "Samuel Roy Hagar (born October 13, 1947), also known as The Red Rocker, is an American singer-songwriter, musician, and entrepreneur. Hagar came to prominence in the 1970s with the hard rock band Montrose. He then launched a successful solo career, scoring a hit in 1984 with \"I Can't Drive 55\". He enjoyed commercial success when he replaced David Lee Roth as the lead singer of Van Halen in 1985, but left in 1996. He returned to the band from 2003 to 2005. On March 12, 2007, Hagar was inducted into the Rock and Roll Hall of Fame as a member of Van Halen. His musical style primarily consists of hard rock, heavy metal, and glam metal.  Also a businessman, Hagar founded the Cabo Wabo tequila brand and restaurant chain, as well as Sammy's Beach Bar rum. His current musical projects include being the lead singer of Chickenfoot and Sammy Hagar and the Circle. Hagar also is the host of Rock & Roll Road Trip with Sammy Hagar on Mark Cuban's cable network AXS TV. "},
{id:3, name: "Alex Van Halen", bio: "Alexander Arthur van Halen (born May 8, 1953) is an American musician, best known for being the drummer and co-founder of the rock band Van Halen. The band was formed in 1972 by Alex Van Halen; his younger brother, Eddie Van Halen; David Lee Roth; and Mark Stone under the name Mammoth before adding Michael Anthony in 1974 and changing their name to Van Halen. Warner Bros. signed the band in 1977, and its debut album was released a year later. Prior to their disbandment in 2020, following Eddie's death, Van Halen released eleven more albums, and the brothers were the only two constant members of the band."},
{id:4, name: "Michael Anthony", bio: "Michael Anthony Sobolewski (born June 20, 1954) is an American musician who was the bassist and backing vocalist for the hard rock band Van Halen from 1974 to 2006. He performed on Van Halen's first 11 albums and was their longest-tenured bassist. Following his 2006 departure, Anthony has collaborated with fellow former Van Halen bandmate Sammy Hagar for the supergroups Chickenfoot and Sammy Hagar and the Circle. In addition to his music career, he markets a line of hot sauces named Mad Anthony and related products. Anthony was inducted to the Rock and Roll Hall of Fame as a member of Van Halen in 2007. "}

];

const bandlist = () => {
    return [...data];
};

const findBandMate = (id) => {
    const bandmate = data.find( mate => mate.id === +id)
    return {...bandmate};


}

module.exports = {
    bandlist,
    findBandMate
}