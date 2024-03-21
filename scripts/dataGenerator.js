function addColumn() {
    var columnInputs = document.getElementById("columnInputs");
    var newColumnInput = document.createElement("div");
    newColumnInput.classList.add("columnInput");
    var label = document.createElement("label");
    label.textContent = "Column Name " + (document.getElementsByClassName("column").length + 1) + ":";
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("column");
    input.required = true;
    newColumnInput.appendChild(label);
    newColumnInput.appendChild(input);
    columnInputs.appendChild(newColumnInput);
}

function generateData() {
    var numRows = parseInt(document.getElementById("numRows").value);
    var dataType = document.getElementById("dataType").value;

    var generatedData = "<table><thead><tr>";

    // Generate table header with column names
    var columns = document.getElementsByClassName("column");
    for (var i = 0; i < columns.length; i++) {
        generatedData += "<th>" + columns[i].value + "</th>";
    }
    generatedData += "</tr></thead><tbody>";

    switch(dataType) {
        case "randomNumbers":
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr>";
                for (var j = 0; j < columns.length; j++) {
                    generatedData += "<td>" + Math.floor(Math.random() * 100) + "</td>";
                }
                generatedData += "</tr>";
            }
            break;
        case "numbersInRange":
            var min = parseInt(document.getElementById("minValue").value);
            var max = parseInt(document.getElementById("maxValue").value);
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr>";
                for (var j = 0; j < columns.length; j++) {
                    generatedData += "<td>" + (Math.floor(Math.random() * (max - min + 1)) + min) + "</td>";
                }
                generatedData += "</tr>";
            }
            break;
        case "singleNumber":
            var number = parseInt(document.getElementById("singleValue").value);
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr>";
                for (var j = 0; j < columns.length; j++) {
                    generatedData += "<td>" + number + "</td>";
                }
                generatedData += "</tr>";
            }
            break;
        case "singleWord":
            var word = document.getElementById("singleValue").value;
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr>";
                for (var j = 0; j < columns.length; j++) {
                    generatedData += "<td>" + word + "</td>";
                }
                generatedData += "</tr>";
            }
            break;
        case "words":
            var wordsInput = document.getElementById("wordsValue").value;
            var words = wordsInput.split(",");
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr>";
                for (var j = 0; j < columns.length; j++) {
                    generatedData += "<td>" + words[Math.floor(Math.random() * words.length)].trim() + "</td>";
                }
                generatedData += "</tr>";
            }
            break;
        default:
            break;
    }

    generatedData += "</tbody></table>";
    document.getElementById("generatedData").innerHTML = generatedData;
}

// Function to show/hide additional input fields based on data type selection
document.getElementById("dataType").addEventListener("change", function() {
    var dataType = this.value;
    var rangeInput = document.getElementById("rangeInput");
    var singleInput = document.getElementById("singleInput");
    var wordsInput = document.getElementById("wordsInput");

    rangeInput.classList.add("hidden");
    singleInput.classList.add("hidden");
    wordsInput.classList.add("hidden");

    switch(dataType) {
        case "numbersInRange":
            rangeInput.classList.remove("hidden");
            break;
        case "singleNumber":
            singleInput.classList.remove("hidden");
            break;
        case "singleWord":
            singleInput.classList.remove("hidden");
            break;
        case "words":
            wordsInput.classList.remove("hidden");
            break;
        default:
            break;
    }
});

// Initially hide additional input fields
document.getElementById("dataType").dispatchEvent(new Event("change"));
