const data = [ { id:1, name:"David Lee Roth", bio: "Insert DLR Bio Here"},
{id:2, name: "Sammy Hagar", bio: "Insert Bio Here"},
{id:3, name: "Alex Van Halen", bio: "Insert Bio Here"},
{id:4, name: "Michael Anthony", bio: "Insert Bio Here"}

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