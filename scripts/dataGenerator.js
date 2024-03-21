function showInputFields() {
    var dataType = document.getElementById("dataType").value;
    document.getElementById("rangeInput").style.display = dataType === "numbersInRange" ? "block" : "none";
    document.getElementById("singleInput").style.display = dataType === "singleNumber" || dataType === "singleWord" ? "block" : "none";
    document.getElementById("wordsInput").style.display = dataType === "words" ? "block" : "none";
}

function generateData() {
    var columnName = document.getElementById("columnName").value;
    var numRows = parseInt(document.getElementById("numRows").value);
    var dataType = document.getElementById("dataType").value;

    var generatedData = "<table><thead><tr><th>" + columnName + "</th></tr></thead><tbody>";

    switch(dataType) {
        case "randomNumbers":
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr><td>" + Math.floor(Math.random() * 100) + "</td></tr>";
            }
            break;
        case "numbersInRange":
            var min = parseInt(document.getElementById("minValue").value);
            var max = parseInt(document.getElementById("maxValue").value);
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr><td>" + (Math.floor(Math.random() * (max - min + 1)) + min) + "</td></tr>";
            }
            break;
        case "singleNumber":
            var number = document.getElementById("singleValue").value;
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr><td>" + number + "</td></tr>";
            }
            break;
        case "singleWord":
            var word = document.getElementById("singleValue").value;
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr><td>" + word + "</td></tr>";
            }
            break;
        case "words":
            var wordsInput = document.getElementById("wordsValue").value;
            var words = wordsInput.split(",");
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr><td>" + words[i % words.length].trim() + "</td></tr>";
            }
            break;
        default:
            break;
    }

    generatedData += "</tbody></table>";
    document.getElementById("generatedData").innerHTML = generatedData;
}
