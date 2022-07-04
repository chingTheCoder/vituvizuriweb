// let productname
// let pages = [
//     "productName",
//     ".imagesPage",
//     "info",
//     "description"
// ]

// document.querySelector("[name='productName']").addEventListener("keyup", function (e) {
    
//     productname = e.target.value

//     if(e.target.value.length > 10) {
//         showNextSection("block")
//         nextPageToggle()
//         return true
//     }

//     showNextSection("none")

// })


// document.querySelector(".nextScroll").addEventListener("click", function () {
//     window.scroll({
//         top: window.innerHeight,
//         left: 0,
//         behavior : "smooth"
//     })
//     this.style.display = "none"
// })

// function showNextSection(state) {
//     document.querySelector(".nextScroll").style.display = state
// }

// function nextPageToggle () {
//     document.querySelector(pages[1]).style.display = "block"
// }



/*image uploading*/

let imageUploadCover = document.querySelector(".imageUploadCover")
imageUploadCover.addEventListener("click", function () {
    document.querySelector("[name='filename']").click()
}) 

document.querySelector("[name='filename']").addEventListener("change", function (e) {
    uploadfile(e.target.files[0])
})


async function uploadfile (fileuploaded) {

    let form = new FormData()

    form.append("filename", fileuploaded)

    let request = await fetch("/admin/fileupload", {
        method : "post",
        body : form
    })

    let response = await request.json()
    let { file } = response
    
    renderUploadedImage(file)

}


function renderUploadedImage (filepath) {
    imageUploadCover.innerHTML = `
        <img src='/images/${filepath}' class="uploadedImage">
    `
}