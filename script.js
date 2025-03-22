const DATA = {
  "Computer Science": {
    "Data Structures": [
      "Stack",
      "Linked List",
      "Queue",
      "Binary Tree"
    ],
    "Artificial Intelligence": [
      "Machine Learning",
      "Neural Network",
      "Large Language Model",
      "Computer Vision"
    ],
    "Sorting Algorithms": [
      "Binary Sort",
      "Insertion Sort",
      "Bubble Sort",
      "Selection Sort"
    ],
    "Data Types": [
      "Boolean",
      "Integer",
      "String",
      "Float"
    ],
    "Difficulty": "Easy"
  },
  "Mathematics": {
    "Algebra": [
      "Linear Equations",
      "Quadratic Equations",
      "Polynomials",
      "Matrices"
    ],
    "Calculus": [
      "Derivatives",
      "Integrals",
      "Limits",
      "Differential Equations"
    ],
    "Geometry": [
      "Triangles",
      "Circles",
      "Angles",
      "Area and Volume"
    ],
    "Probability": [
      "Permutations",
      "Combinations",
      "Probability Distributions",
      "Bayes Theorem"
    ],
    "Difficulty": "Medium"
  },
  "Countries": {
    "Africa": [
      "Egypt",
      "Nigeria",
      "South Africa",
      "Kenya"
    ],
    "Asia": [
      "China",
      "India",
      "Japan",
      "South Korea"
    ],
    "Europe": [
      "Germany",
      "France",
      "Italy",
      "United Kingdom"
    ],
    "North America": [
      "United States",
      "Canada",
      "Mexico",
      "Cuba"
    ],
    "South America": [
      "Brazil",
      "Argentina",
      "Colombia",
      "Chile"
    ],
    "Oceania": [
      "Australia",
      "New Zealand",
      "Papua New Guinea",
      "Fiji"
    ],
    "Difficulty": "Medium"
  },
  "Mammals": {
    "Big Cats": [
      "Lion",      
      "Tiger",      
      "Leopard",   
      "Cheetah"     
    ],
    "Apes": [
      "Bonobos",      
      "Chimpanzee", 
      "Gorilla",    
      "Orangutan"  
    ],
    "Marsupials": [
      "Wombats",       
      "Kangaroos",       
      "Koala",   
      "Opossum"   
    ],
    "Rodents": [
      "Rat",       
      "Mouse",      
      "Squirrel",   
      "Guinea Pig"  
    ],
    "Difficulty": "Medium"
  },
  "Historical Eras": {
    "Ancient Era": [
      "Stone Age",
      "Bronze Age",
      "Iron Age",
      "Classical Civilizations"
    ],
    "Medieval Era": [
      "Dark Ages",
      "Feudalism",
      "Crusades",
      "Viking Age"
    ],
    "Modern Era": [
      "Renaissance",
      "Industrial Revolution",
      "World Wars",
      "Cold War"
    ],
    "Contemporary Era": [
      "Post-Colonialism",
      "Information Age",
      "Globalization",
      "21st Century"
    ],
    "Difficulty": "Medium"
  },
  "Physics": {
    "Mechanics": [
      "Force",
      "Velocity",
      "Acceleration",
      "Newton's Laws"
    ],
    "Electromagnetism": [
      "Electric Field",
      "Magnetic Field",
      "Coulomb's Law",
      "Faraday's Law"
    ],
    "Thermodynamics": [
      "Temperature",
      "Entropy",
      "Heat Transfer",
      "Laws of Thermodynamics"
    ],
    "Quantum Physics": [
      "Wave-Particle Duality",
      "Quantum Entanglement",
      "Schrödinger's Cat",
      "Heisenberg Principle"
    ],
    "Difficulty": "Hard"
  },
  "Quantum Physics": {
    "Quantum Mechanics": [
      "Wave-Particle Duality",
      "Heisenberg Principle",
      "Schrödinger's Equation",
      "Quantum Tunneling"
    ],
    "Quantum Theory": [
      "Superposition Principle",
      "Quantum Entanglement",
      "Bell's Theorem",
      "Quantization"
    ],
    "Quantum Field Theory": [
      "Quantum Electrodynamics",
      "Quantum Chromodynamics",
      "Feynman Diagrams",
      "Higgs Boson"
    ],
    "Quantum Computing": [
      "Quantum Bit",
      "Shor's Algorithm",
      "Quantum Gate",
      "Quantum Superposition"
    ],
    "Difficulty": "Hard"
  },
  "Law Concepts": {
    "Constitutional Law": [
      "Judicial Review",
      "Separation of Powers",
      "Due Process Clause",
      "Equal Protection Clause"
    ],
    "Criminal Law": [
      "Mens Rea",
      "Actus Reus",
      "Double Jeopardy",
      "Miranda Rights"
    ],
    "International Law": [
      "Jus Cogens",
      "Treaty Law",
      "Extradition",
      "Diplomatic Immunity"
    ],
    "Legal Theories": [
      "Natural Law Theory",
      "Legal Positivism",
      "Critical Legal Studies",
      "Feminist Legal Theory"
    ],
    "Difficulty": "Medium"
  }
}

class Node {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.value = val;
    this.check = false;
  }
  pressed() {
    if (Math.hypot(mouseX - this.x, mouseY - this.y) < 30) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    this.dragging = false;
  }
  update() {
    if (this.check == true) {
      return
    }
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
    for (var item of cval["cn"]) {
      let ipos = item["pos"];
      if (Math.hypot(this.x - ipos[0], this.y - ipos[1]) < 13) {
        this.x = ipos[0];
        this.y = ipos[1];
      } else {
        for (var ite of item["cn"]) {
          ipos = ite["pos"];
          if (Math.hypot(this.x - ipos[0], this.y - ipos[1]) < 13) {
            this.x = ipos[0];
            this.y = ipos[1];
          }
        }
      }
    }
  }
}

function mousePressed() {
  for (var item of shapes) {
    item.pressed();
  }
}

function mouseReleased() {
  for (var item of shapes) {
    item.released();
  }
}
let font;
let page = 0;
let mdown = false;
//0 = home
//1 = how to play
//2 = level select
//3+ = level
let time = 0;
let tused = 0;
let bghome;
let htphome;
let newpr = false;
let pdelay = 0;
let shapes = [];
let record = "";
let cval = null;
const brpos = [[500, 450], [300, 250], [300, 450], [500, 250]]
const resetcval = () => cval = {
  "val": "",
  "pos": [400, 350],
  "cn": [
    {
      "val": "",
      "pos": [300, 250],
      "cn": [
        {
          "val": "",
          "pos": [
            350,
            130
          ]
        },
        {
          "val": "",
          "pos": [
            250,
            130
          ]
        },
        {
          "val": "",
          "pos": [
            180,
            200
          ]
        },
        {
          "val": "",
          "pos": [
            180,
            300
          ]
        }
      ]
    },
    {
      "val": "",
      "pos": [300, 450],
      "cn": [
        {
          "val": "",
          "pos": [
            350,
            570
          ]
        },
        {
          "val": "",
          "pos": [
            250,
            570
          ]
        },
        {
          "val": "",
          "pos": [
            180,
            500
          ]
        },
        {
          "val": "",
          "pos": [
            180,
            400
          ]
        }
      ]
    },
    {
      "val": "",
      "pos": [500, 250],
      "cn": [
        {
          "val": "",
          "pos": [
            450,
            130
          ]
        },
        {
          "val": "",
          "pos": [
            550,
            130
          ]
        },
        {
          "val": "",
          "pos": [
            620,
            200
          ]
        },
        {
          "val": "",
          "pos": [
            620,
            300
          ]
        }
      ]
    },
    {
      "val": "",
      "pos": [500, 450],
      "cn": [
        {
          "val": "",
          "pos": [
            450,
            570
          ]
        },
        {
          "val": "",
          "pos": [
            550,
            570
          ]
        },
        {
          "val": "",
          "pos": [
            620,
            500
          ]
        },
        {
          "val": "",
          "pos": [
            620,
            400
          ]
        }
      ]
    }
  ]
}

resetcval();
console.log(resetcval());


function preload() {
  font = loadFont('/assets/winkysans.ttf');
  bghome = loadImage('https://i.ibb.co/mdFc7j9/bgc.png');
  htphome = loadImage('https://i.ibb.co/mr8xynhK/howtoplay.png');

}
function setup() {
  createCanvas(800, 800);
  //Let's make the shapes
  let cx = 40;
  let cy = 680;
  for (let i = 0; i < 20; i++) {
    shapes.push(new Node(cx, cy))
    cx += 80;
    if (cx > 760) {
      cy += 80;
      cx = 40;
    }

  }


}


function draw() {

  background("#eaf7ff");
  // Grid background because why not
  stroke('rgba(200, 200, 200, 0.9)');
  strokeWeight(0.7);
  for (let i = 0; i < 800; i += 40) {
    line(0, i - (mouseX - 400) / 50, 800, i - (mouseX - 400) / 50);
  }

  for (let i = 0; i < 800; i += 40) {
    line(i + (mouseY - 400) / 50, 0, i + (mouseY - 400) / 50, 800);
  }


  if (page == 0) { // Main page
    //Home background
    image(bghome, 0 + (mouseX - 400) / 100, 0 + (mouseY - 400) / 100);


    if (pdelay > 0) {
      pdelay -= 1;
    }
    //Main page text
    textAlign(CENTER);
    fill('black');
    textFont(font);
    textSize(84);
    text('ConNetwork', 400, 340);
    textSize(20);
    text('The ultimate 2D concept network game', 400, 370);

    //Button
    stroke('#769ab0');
    strokeWeight(0.7);
    fill("#b2d1e4")
    if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 390 && mouseY < 390 + 40) {
      fill("#98bdd4")
    }
    rect(300, 390, 200, 40, 3);
    fill("#b2d1e4")
    if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 450 && mouseY < 450 + 40) {
      fill("#98bdd4")
    }
    rect(300, 450, 200, 40, 3);
    fill("black")
    textSize(19);
    text('How to Play', 400, 415);
    text('Levels', 400, 475);

    // Check for button events
    if (mouseIsPressed === true && pdelay == 0) {
      if (mouseButton === LEFT) {
        if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 390 && mouseY < 390 + 40) {
          page = 1
          pdelay = 5;
        }

        if (mouseX > 300 && mouseX < 300 + 200 && mouseY > 450 && mouseY < 450 + 40) {
          page = 2;
          pdelay = 5;

        }
      }
    }
  } else if (page == 1) {
    if (pdelay > 0) {
      pdelay -= 1;
    }
    image(bghome, 0 + (mouseX - 400) / 100, 0 + (mouseY - 400) / 100);
    image(htphome, 0 + (mouseX - 400) / 200, 0 + (mouseY - 400) / 200);

    fill("#b2d1e4")
    if (mouseX > 20 && mouseX < 20 + 150 && mouseY > 20 && mouseY < 20 + 40) {
      fill("#98bdd4")
    }
    rect(20, 20, 150, 40, 3);
    fill('black');
    stroke('black');
    text('Back to Home', 95, 45);
    if (mouseIsPressed === true && pdelay == 0) {
      if (mouseButton === LEFT) {
        if (mouseX > 20 && mouseX < 20 + 150 && mouseY > 20 && mouseY < 20 + 40) {
          page = 0
          pdelay = 5;
        }

      }
    }

  } else if (page == 2) {
    // Slight delay before full functionality
    if (pdelay > 0) {
      pdelay -= 1;
    }
    // Level select page text
    textAlign(CENTER);
    fill('black');
    textFont(font);
    textSize(74);
    text('Level Select', 400, 300);
    textSize(19);
    
    text('Levels increase in difficulty!', 400, 330);
    fill("#b2d1e4")
    if (mouseX > 20 && mouseX < 20 + 150 && mouseY > 20 && mouseY < 20 + 40) {
      fill("#98bdd4")
    }
    rect(20, 20, 150, 40, 3);
    fill('black');
    stroke('black');
    text('Back to Home', 95, 45);
    if (mouseIsPressed === true && pdelay == 0) {
      if (mouseButton === LEFT) {
        if (mouseX > 20 && mouseX < 20 + 150 && mouseY > 20 && mouseY < 20 + 40) {
          page = 0
          pdelay = 5;
        }

      }
    }

    //Level buttons - left to right by row and then down by column
    let lx = 170;
    let ly = 350;
    let count = 1;

    for (let key of Object.keys(DATA)) {
      fill("#b2d1e4")
      if (mouseX > lx && mouseX < lx + 100 && mouseY > ly && mouseY < ly + 100) {
        fill("#98bdd4")
      }
      stroke('#769ab0');
      strokeWeight(0.7);
      if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
          if (pdelay == 0) {
            if (mouseX > lx && mouseX < lx + 100 && mouseY > ly && mouseY < ly + 100) {
              page = count + 3;
              time = Date.now();
              shapes = [];
              tused = 0;

              let da = DATA[Object.keys(DATA)[count - 1]];
              cval["val"] = Object.keys(DATA)[count - 1]
              let cx = 40;
              let cy = 680;
              for (let i = 0; i < 4; i++) {
                cval["cn"][i]["val"] = Object.keys(da)[i]
                shapes.push(new Node(cx, cy, Object.keys(da)[i]))

                cx += 80;
                if (cx > 760) {
                  cy += 80;
                  cx = 40;
                }
                for (let j = 0; j < da[Object.keys(da)[i]].length; j++) {
                  cval["cn"][i]["cn"][j]["val"] = da[Object.keys(da)[i]][j];
                  shapes.push(new Node(cx, cy, da[Object.keys(da)[i]][j]))
                  cx += 80;
                  if (cx > 760) {
                    cy += 80;
                    cx = 40;
                  }
                }

              }
              console.log(cval)
            }
          }

        }
      }
      rect(lx, ly, 100, 100, 3);
      stroke("black");
      fill("black")
      textSize(40);
      text(count, lx + 50, ly + 60);
      count += 1;
      lx += 120;
      if (lx > 600) {
        lx = 170;
        ly += 120;
      }
    }
  } else if (page >= 3) {
    if (pdelay > 0) {
      pdelay -= 1;
    }
    textAlign(CENTER)
    
    fill("#b2d1e4")
    if (mouseX > 20 && mouseX < 20 + 150 && mouseY > 50 && mouseY < 50 + 40) {
      fill("#98bdd4")
    }
    rect(20, 50, 150, 40, 3);
    fill('black');
    stroke('black');
    textSize(19);

    text('Back to Levels', 95, 75);
    if (mouseIsPressed === true && pdelay == 0) {
      if (mouseButton === LEFT) {
        if (mouseX > 20 && mouseX < 20 + 150 && mouseY > 50 && mouseY < 50 + 40) {
          page = 2
          pdelay = 5;
        }

      }
    }

    // Draw tree
    fill("#b2d1e4")
    stroke('#769ab0');
    strokeWeight(0.7);
    // Main branches
    for (var mc of (cval["cn"])) {
      line(400, 350, mc["pos"][0], mc["pos"][1]);
      for (var mcc of (mc["cn"])) {
        line(mc["pos"][0], mc["pos"][1], mcc["pos"][0], mcc["pos"][1]);

        circle(mcc["pos"][0], mcc["pos"][1], 75);

      }
      circle(mc["pos"][0], mc["pos"][1], 75);

    }

    for (var item of shapes) {
      fill("#b2d1e4")
      stroke('#769ab0');
      if (item.check) {
        fill("#addbb4");
        stroke('#9bdda5');

      }
      circle(item.x, item.y, 75);
      stroke("black");
      fill("black")
      textSize(12);
      if (String(item.value).length > 13) {
        text(String(item.value).substring(0, String(item.value).length / 2) + "-", item.x, item.y - 10);
        text(String(item.value).substring(String(item.value).length / 2), item.x, item.y + 10);

      } else {
        text(item.value, item.x, item.y);

      }

      item.update();

    }
    let b = 0;
    for (var item of cval["cn"]) {
      let m = "";
      let p = []
      for (var ite of shapes) {
        if (item["val"] == ite.value && brpos.filter((ie) => ie[0] == ite.x && ie[1] == ite.y).length == 1) {
          m = ite.value;
          p = [ite.x, ite.y]
          break;
        }
      }
      if (m == "") {
        continue;
      }
      var lookingFor = DATA[cval["val"]][m].map(e => e);
      console.log(lookingFor)
      var bpos = cval["cn"].filter((a) => a["pos"][0] == p[0] && a["pos"][1] == p[1])[0]["cn"].map((ie) => ie["pos"])
      var slist = []
      // for (let i = lookingFor.length-1; i >= 0; i--) {
      for (let i = 0; i < shapes.length; i++) {
        var ite = shapes[i]
        if (lookingFor.includes(ite.value) && bpos.filter((ie) => ie[0] == ite.x && ie[1] == ite.y).length == 1) {
          lookingFor.splice(lookingFor.indexOf(ite.value), 1);
          bpos = bpos.filter((ie) => ie[0] != ite.x || ie[1] != ite.y)
          slist.push(i)
          continue;
        }
      }
      if (lookingFor.length == 0) {
        b += 1;
        console.log(slist.length)
        for (var i of slist) {
          shapes[i].check = true;
        }
        for (var k of shapes) {
          if (k.value == m) {
            k.check = true;
            break;
          }
        }
      }
    }
    fill("black")
    stroke('black');
    textSize(40)
    textAlign(LEFT)
    var diff = Date.now() - time;
    let minutes = Math.round((diff / 1000) / 60);
    let seconds = Math.round((int)((diff / 1000) % 60));
    text((minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds, 20, 40);
    textAlign(CENTER)
    textSize(12)

    if (b == 4) { //KEEP THIS AT 4
      fill("#addbb4");
      stroke('#5cb169');
      circle(400, 350, 75);
      fill("black")
      stroke('black');
      if (String(cval["val"]).length > 13) {
        text(String(cval["val"]).substring(0, String(cval["val"]).length / 2) + "-", 400, 350 - 10);
        text(String(cval["val"]).substring(String(cval["val"]).length / 2), 400, 350 + 10);

      } else {
        text(cval["val"], item.x, item.y);

      }
      console.log("all branches finished!")

      //Show finished screen
      fill("white");
      stroke('#5cb169');
      rect(200, 200, 400, 400, 20)
      fill("black")
      stroke('black');
      textAlign(LEFT)
      textSize(44)
      text("Level Completed!", 220, 260);

      if (tused == 0) {
        tused = Date.now() - time;
        if (newpr == false) {
          if (localStorage.getItem("pr") == null) {
            localStorage.setItem("pr", JSON.stringify({}));
            newpr = true;

          }
          let pr = JSON.parse(localStorage.getItem("pr"));
          if (Object.keys(pr).includes(String(page))) {
            record = pr[String(page)];
            if (record > tused) {
              record = tused;
              newpr = true;
            }
          } else {
            record = tused;
            newpr = true;
          }
          pr[String(page)] = record;
          localStorage.setItem("pr", JSON.stringify(pr));

        }
        pdelay = 5;

      }
      textSize(27)
      minutes = Math.round((tused / 1000) / 60);
      seconds = Math.round((int)((tused / 1000) % 60));
      //Look for personal record 

      let minutes2 = Math.round((record / 1000) / 60);
      let seconds2 = Math.round((int)((record / 1000) % 60));

      text("Final Time: " + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds, 220, 330)
      text("Personal Record: " + (minutes2 < 10 ? "0" : "") + minutes2 + ":" + (seconds2 < 10 ? "0" : "") + seconds2, 220, 370)
      textSize(17)
      if (newpr) {
        text("New Personal Record!", 220, 290)

      }

      //Finish screen buttons
      textSize(20)
      fill("#b2d1e4")
      if (mouseX > 225 && mouseX < 225 + 150 && mouseY > 400 && mouseY < 400 + 40) {
        fill("#98bdd4")
      }
      rect(225, 400, 150, 40, 3);
      if (page - 3 != Object.keys(DATA).length) {
        fill("#b2d1e4")
        if (mouseX > 410 && mouseX < 410 + 150 && mouseY > 400 && mouseY < 400 + 40) {
          fill("#98bdd4")
        }
        rect(410, 400, 150, 40, 3);
      }

      textAlign(CENTER)
      stroke("black");
      fill("black");
      text('Levels', 300, 425);
      if (page - 3 != Object.keys(DATA).length) {
        text('Next', 485, 425);

      }
      if (mouseIsPressed === true && pdelay == 0) {
        if (mouseButton === LEFT) {
          if (mouseX > 225 && mouseX < 225 + 150 && mouseY > 400 && mouseY < 400 + 40) {
            page = 2
            pdelay = 20;
          }
          if (page - 2 != Object.keys(DATA).length) {
            if (mouseX > 410 && mouseX < 410 + 150 && mouseY > 400 && mouseY < 400 + 40) {
              resetcval();
              page = page + 1;
              time = Date.now();
              shapes = [];
              tused = 0;
              console.log(page)
              let da = DATA[Object.keys(DATA)[page - 4]];
              cval["val"] = Object.keys(DATA)[page-4]
              let cx = 40;
              let cy = 680;
              for (let i = 0; i < 4; i++) {
                cval["cn"][i]["val"] = Object.keys(da)[i]
                shapes.push(new Node(cx, cy, Object.keys(da)[i]))

                cx += 80;
                if (cx > 760) {
                  cy += 80;
                  cx = 40;
                }
                for (let j = 0; j < da[Object.keys(da)[i]].length; j++) {
                  cval["cn"][i]["cn"][j]["val"] = da[Object.keys(da)[i]][j];
                  shapes.push(new Node(cx, cy, da[Object.keys(da)[i]][j]))
                  cx += 80;
                  if (cx > 760) {
                    cy += 80;
                    cx = 40;
                  }
                }

              }

            }
          }

        }
      }



    } else {
      fill("#b2d1e4")
      stroke('#769ab0');
      circle(400, 350, 75);
      fill("black")
      stroke('black');
      
      console.log(cval["val"])
      if (String(cval["val"]).length > 13) {
        text(String(cval["val"]).substring(0, String(cval["val"]).length / 2) + "-", 400, 350 - 10);
        text(String(cval["val"]).substring(String(cval["val"]).length / 2), 400, 350 + 10);

      } else {
        text(cval["val"], 400, 350);

      }
    }



    // for (let i = -1; i < 2; i += 2) {
    //   for (let j = -1; j < 2; j += 2) {
    //     circle(400 + 100 * (i), 350 + 100 * (j), 80);
    //     if ((400 + (100 * (i))) == 500 && (350 + (100 * (j)) == 450)) {
    //       console.log("hello")
    //       console.log([
    //         {
    //           "val": "",
    //           "pos": [400 + 100 * (i) - 50 * (i), 350 + 100 * (j) + 120 * (j)]
    //         },
    //         {
    //           "val": "",
    //           "pos": [400 + 100 * (i) + 50 * (i), 350 + 100 * (j) + 120 * (j)]
    //         },
    //         {
    //           "val": "",
    //           "pos": [400 + 100 * (i) + 120 * (i), 350 + 100 * (j) + 50 * (j)]
    //         },
    //         {
    //           "val": "",
    //           "pos": [400 + 100 * (i) + 120 * (i), 350 + 100 * (j) - 50 * (j)]
    //         }
    //       ])
    //     }
    //     circle(400 + 100 * (i) - 50 * (i), 350 + 100 * (j) + 120 * (j), 80);
    //     circle(400 + 100 * (i) + 50 * (i), 350 + 100 * (j) + 120 * (j), 80);
    //     circle(400 + 100 * (i) + 120 * (i), 350 + 100 * (j) + 50 * (j), 80);
    //     circle(400 + 100 * (i) + 120 * (i), 350 + 100 * (j) - 50 * (j), 80);


    //     // circle(400 + 100 * (i) +40 * (i), 400 + 100 * (j) + 40 * (j), 80);
    //     // circle(400 + 100 * (i) +80 * (i), 400 + 100 * (j) + 80 * (j), 80);



    //   }
    // }

  }
}