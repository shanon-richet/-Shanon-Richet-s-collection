const collection=[
    {
        artist:'Mr Gasmask',
        title: "Acid Attack",
        link: "Addiction EP (2016, Vinyl)",
        genre: 'Acid Core'
    },
    {
        artist:'Mr Gasmask',
        title:"Distorted Drum Disciples",
        link: 'Neurotrope 36 (2016,Vinyl)',
        genre: "Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title:"Chiaroscuro",
        link:"Dune 05 (2013, Vinyl)",
        genre: "Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title: "Vonk",
        link:"Analog Tecnè Model 07",
        genre:"Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title:"Geisteskranke",
        link: "The Future Is Late EP (2013, Vinyl)",
        genre:'Acid Core'
    },
    {
        artist:"Mr Gasmask & Acidolido",
        title:"Flesh Vessel",
        link: "Neurotrope 044(2016, Vinyl)",
        genre:"Acid Core"
    },
    {
        artist:"Mr Gasmask",
        title:"Crooked Cooking",
        link: "Neurotrope 044(2016, Vinyl)",
        genre:"Acid Core"
    },
    {
        artist:'Mr Gasmask',
        title: "Urtekram",
        link: "Old Skull, Vol 17 (2019)",
        genre: 'Acid Core'
    }, 
    {
        artist:'Mr Gasmask',
        title: "Jawbreaker",
        link:"Jawbreaker E.P. (2010, Vinyl)",
        genre: 'Acid Core'

    },
    {
        artist:'Mr Gasmask',
        title: "Time out Forever",
        link: "Jawbreaker E.P. (2010, Vinyl)",
        genre: 'Acid Core',
        }
]

var main= document.createElement("main");
document.body.appendChild(main);
console.log(document.body.childNodes);


for (const track of collection) {
    console.log(track);
   var table= document.createElement("table");

    var li = document.createElement("h6");
    var text= document.createTextNode(track.artist);

    var li2 = document.createElement("h3");
    var text2= document.createTextNode(track.title);

    var li3 = document.createElement("article");
    var text3= document.createTextNode(track.link);


    var li4 = document.createElement("h5");
    var text4= document.createTextNode(track.genre);

    main.appendChild(table);
    table.appendChild(li);
    table.appendChild(li2);
    table.appendChild(li3);
    table.appendChild(li4);

    li.appendChild(text);
    li2.appendChild(text2);
    li3.appendChild(text3);
    li4.appendChild(text4);
}

document.body.style.backgroundColor= "indigo";



