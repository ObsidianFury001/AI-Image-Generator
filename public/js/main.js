
// Set the value of the selected item to the dropdown text 
function show(optionText) {
    // console.log(optionText);
    document.querySelector('#imageSize').value = optionText;
}
// Open and close dropdown
const DropDown = document.querySelector("#ImageDropDown");
DropDown.onclick = () => {
    DropDown.classList.toggle('open');
};

function showSpinner() {
    document.querySelector("#spinner").classList.add("show-spinner");
}

function removeSpinner() {
    document.querySelector("#spinner").classList.remove("show-spinner");
}

function SubmitForm(e) {
    e.preventDefault();
    document.querySelector("#image-viewer").classList.add("display-none");
    const prompt = document.querySelector("#prompt").value;
    const size = document.querySelector("#imageSize").value;
    var message = "", flag = 0;

    if (prompt == '') {
        message = "Please enter an image description...";
        flag += 1;
    }
    if (size == '') {
        message = "Please select an image size...";
        flag += 1;
    }
    if (prompt == '' && size == 'Image Size') {
        message = "Please enter an image description and select an image size...";
        flag += 1;
    }
    if (flag !== 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
        });
        return;
    }
    console.log("Success.", prompt, size);
    generateImageRequest(prompt, size);
}
async function generateImageRequest(prompt, size) {
    try {
        showSpinner();
        const response = await fetch("/openai/generateimage", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                prompt,
                size
            })
        });
        const fetchedResponse = await response.json();

        if (!response.ok) {
            throw new Error("Image cannot be generated.");
            removeSpinner();
        }
        
        removeSpinner();
        console.log("Success.");
        console.log(fetchedResponse);
        const imageUrl = fetchedResponse.data;
        document.querySelector("#image-viewer").classList.remove("display-none");
        document.querySelector("#image").src = imageUrl;

    } catch (error) {
        removeSpinner();
        console.log(error.response.status);
        console.log(error.response.data);

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: String(error),
        });
    }
}

document.querySelector("#image-form").addEventListener('submit', SubmitForm);