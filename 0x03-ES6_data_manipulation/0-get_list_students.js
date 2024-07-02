export default function getListStudents() {
    const id = [1, 2, 5];
    const firstName = ["Guillaume", "James", "Serena"];
    const location = ["San Francisco",  "Columbia"];

    const client = [
        {id: id[0], firstName:`${firstName[0]}`, location: `${location[0]}`},
        {id: id[1], firstName:`${firstName[1]}`, location: `${location[1]}`},
        {id: id[2], firstName:`${firstName[2]}`, location: `${location[0]}`}
    ];

    return client;
}
