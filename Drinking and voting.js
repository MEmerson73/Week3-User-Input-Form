function check()
{

var Year = document.getElementById("Year").value;
var Month = document.getElementById("Month").value;



if (Year < 2002 && Year > 1900)
{
    alert("Cheers valid birth year");
}
else if (Year < 2005  && Year > 2002)
{
    alert("Too young to Drink --  But you can vote");
}
else if (Year > 2006)
{
    alert("you cant drink or vote");
}
if (Month == "January" || Month == "February"|| Month == "March" || Month == "April"  || Month == "May"  || Month == "June")
{
    alert("Valid birth month");
}
else
{
    alert("InValid Birth Month");
}
}