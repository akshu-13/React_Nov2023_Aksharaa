function clickevent()
{
    var name=document.getElementById("name").value;
    document.write("Hi "+name);
}
function ifelse()
{
    var first=parseInt(document.getElementById("firstname").value);
    var second=parseInt(document.getElementById("secondname").value);
    if(first>second)
    {
        document.write(first+" is greater than "+second);
    }
    else{
        
        document.write(second+" is greater "+first);
    }
}