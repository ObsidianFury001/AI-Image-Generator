function SubmitForm(e) {
    e.preventDefault();
    const prompt = document.querySelector("#prompt").value;
    const size = document.querySelector("#imageSize").value;
    var message = "", flag = 0;
    
    if(prompt == '') {
        message = "Please enter an image description...";
        flag += 1;
    }
    if(size == '') {
        message = "Please select an image size...";
        flag = 1;
    }
    if( prompt == '' && size == 'Image Size'){
        message = "Please enter an image description and select an image size...";
        flag = 1;
    }
    if( flag !== 0){
        Swal.fire({
            icon: 'Error',
            title: 'Error',
            text: message,
          });
        return;
    }
    console.log("Success.", prompt, size);
    generateImageRequest(prompt, size);
}
async function generateImageRequest(prompt, size){
    
}

document.querySelector("#image-form").addEventListener('submit', SubmitForm);