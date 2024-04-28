// DATA ATTRIBUTE ASSIGNMENT
function revealDef(moonPhase) {// returns the answer contained within each data-attribute list item as an alert text box. Takes in the element itself
    var moonPhaseSelect = moonPhase.getAttribute("data-moon-phase");// retrieves data-attribute 
    alert("The " + moonPhase.innerHTML + " is " + moonPhaseSelect);// outputs alter box with response incluing attribute and element
}