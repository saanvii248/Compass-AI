const input = document.querySelector("input");
const askButton = document.querySelector("button");

askButton.addEventListener("click", function () {

    const question = input.value.trim();

    if (question === "") {
        alert("Please enter a question.");
        return;
    }

    alert(
        "COMPASS received your question:\n\n" +
        question +
        "\n\nAI memory response will be connected soon."
    );

});
