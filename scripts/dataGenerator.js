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
            var min = parseInt(prompt("Enter the minimum value:"));
            var max = parseInt(prompt("Enter the maximum value:"));
            for (var i = 0; i < numRows; i++) {
                generatedData += "<tr><td>" + (Math.floor(Math.random() * (max - min + 1)) + min) + "</td></tr>";
            }
            break;
        case "singleNumber":
            var number = parseInt(prompt("Enter the number:"));
            generatedData += "<tr><td>" + number + "</td></tr>";
            break;
        case "singleWord":
            var word = prompt("Enter the word:");
            generatedData += "<tr><td>" + word + "</td></tr>";
            break;
        case "words":
            var wordsInput = prompt("Enter words separated by commas:");
            var words = wordsInput.split(",");
            for (var i = 0; i < words.length; i++) {
                generatedData += "<tr><td>" + words[i].trim() + "</td></tr>";
            }
            break;
        default:
            break;
    }

    generatedData += "</tbody></table>";
    document.getElementById("generatedData").innerHTML = generatedData;
}
