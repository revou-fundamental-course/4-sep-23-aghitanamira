document.addEventListener("DOMContentLoaded", function () {
    const explanationDiv = document.getElementById("explanation");
    const buttonContainer = document.getElementById("button-container");
    const formulaDiv = document.getElementById("formula");
    const calculatorForm = document.getElementById("calculator-form");
    const sideLengthInput = document.getElementById("sideLength");
    const resultDiv = document.getElementById("result");
    const errorMessage = document.getElementById("error-message");
    const backButton = document.getElementById("back");
    const resetButton = document.getElementById("reset");

    // Menampilkan penjelasan awal saat halaman dimuat
    explanationDiv.style.display = "block";
    buttonContainer.style.display = "block";
    formulaDiv.style.display = "none";
    calculatorForm.style.display = "none";
    resultDiv.style.display = "none";

    // Mengatur event listener untuk tombol "Hitung Luas"
    document.getElementById("calculate-area").addEventListener("click", function () {
        explanationDiv.style.display = "none";
        buttonContainer.style.display = "none";
        formulaDiv.style.display = "block";
        calculatorForm.style.display = "block";
        resultDiv.style.display = "none";

        // Menampilkan rumus luas persegi
        formulaDiv.innerHTML = `
            <h3>Rumus Luas Persegi :</h3>
            <p>L = S x S</p>
            <p>Dimana :</p>
            <p>L : Luas</p>
            <p>S : Sisi</p>
        `;

        // Mengatur event listener untuk form perhitungan luas
        calculatorForm.onsubmit = function (e) {
            e.preventDefault();
            const sideLength = parseFloat(sideLengthInput.value);

            if (!isNaN(sideLength) && sideLength > 0) {
                const area = sideLength * sideLength;
                resultDiv.innerHTML = `Luas: ${area}`;
                resultDiv.style.display = "block";
                backButton.style.display = "block";
                resetButton.style.display = "block";
            } else {
                errorMessage.textContent = "Masukkan panjang sisi yang valid (bilangan bulat positif).";
            }
        };

        // Mengatur event listener untuk tombol "Reset"
        resetButton.addEventListener("click", function () {
            sideLengthInput.value = "";
            resultDiv.style.display = "none";
            backButton.style.display = "none";
            resetButton.style.display = "none";
            errorMessage.textContent = "";
        });
    });

    // Mengatur event listener untuk tombol "Hitung Keliling"
    document.getElementById("calculate-perimeter").addEventListener("click", function () {
        explanationDiv.style.display = "none";
        buttonContainer.style.display = "none";
        formulaDiv.style.display = "block";
        calculatorForm.style.display = "block";
        resultDiv.style.display = "none";

        // Menampilkan rumus keliling persegi
        formulaDiv.innerHTML = `
            <h3>Rumus Keliling Persegi :</h3>
            <p>K = 4 x S</p>
            <p>Dimana :</p>
            <p>K : Keliling</p>
            <p>S : Sisi</p>
        `;

        // Mengatur event listener untuk form perhitungan keliling
        calculatorForm.onsubmit = function (e) {
            e.preventDefault();
            const sideLength = parseFloat(sideLengthInput.value);

            if (!isNaN(sideLength) && sideLength > 0) {
                const perimeter = 4 * sideLength;
                resultDiv.innerHTML = `Keliling: ${perimeter}`;
                resultDiv.style.display = "block";
                backButton.style.display = "block";
                resetButton.style.display = "block";
            } else {
                errorMessage.textContent = "Masukkan panjang sisi yang valid (bilangan bulat positif).";
            }
        };

        // Mengatur event listener untuk tombol "Reset"
        resetButton.addEventListener("click", function () {
            sideLengthInput.value = "";
            resultDiv.style.display = "none";
            backButton.style.display = "none";
            resetButton.style.display = "none";
            errorMessage.textContent = "";
        });
    });

    // Mengatur event listener untuk tombol "Back"
    backButton.addEventListener("click", function () {
        explanationDiv.style.display = "block";
        buttonContainer.style.display = "block";
        formulaDiv.style.display = "none";
        calculatorForm.style.display = "none";
        resultDiv.style.display = "none";
        backButton.style.display = "none";
        resetButton.style.display = "none";
        errorMessage.textContent = "";
    });
});
