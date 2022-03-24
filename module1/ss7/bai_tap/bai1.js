let physics = prompt("Display physics:");
let chemistry = prompt("Display chemistry:");
let biology = prompt("Display biology:");
physics1 = parseFloat(physics);
chemistry1 = parseFloat(chemistry);
biology1 = parseFloat(biology);
let total = physics1+chemistry1+biology1;
let medium = (physics1+chemistry1+biology1)/3;
document.write("medium:"+medium);
document.write("<br/>")
document.write("total:"+total);