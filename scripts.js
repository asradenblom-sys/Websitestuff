const getImages = function() {
    return "https://raw.githubusercontent.com/asradenblom-sys/CardImages/refs/heads/main/Loading%20Bay.png";

}
function show(){
    let image = document.getElementById("1");
    url = getImages();
    image.src = url;
}
