var data=[
    {p:'“Be yourself; everyone else is already taken.”',sName:'― Oscar Wilde'},
    {p:'“So many books, so little time.”',sName:'― Frank Zappa'},
    {p:'“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”',sName:'― Albert Einstein'},
    {p:'“A room without books is like a body without a soul.”',sName:'― Marcus Tullius Cicero'},
    {p:'“You only live once, but if you do it right, once is enough.”',sName:'― Mae West'},
    {p:'“Be the change that you wish to see in the world.”',sName:'― Mahatma Gandhi'},
    {p:'“In three words I can sum up everything I have learned about life: it goes on.”',sName:'― Robert Frost'},
    {p:'“A friend is someone who knows all about you and still loves you.”',sName:'― Elbert Hubbard'},
    {p:'“Always forgive your enemies; nothing annoys them so much.”',sName:'― Oscar Wilde'},
    {p:'“If you tell the truth, you donot have to remember anything.”',sName:'― Mark Twain'}
]


var check=''
function displayData(){
    var x;
    var z;
    var y;
    do{
        x=Math.floor(Math.random()*data.length)
        z= data[x].p
        y=data[x].sName
    }while(z===check)
        check=z
    document.getElementById('quote').innerHTML=z
    document.getElementById('name').innerHTML=y
}


