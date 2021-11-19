//this is where i will add the denamic content ofthe page to 
const bodyOfGallery = document.querySelector('#bodyOfGallery');

const imageButton = document.querySelector('#imageButton');
const albumButton = document.querySelector('#albumButton');

//all click event

function imageButtonClick()
{
    removeAllChildNodes(bodyOfGallery);
    bodyOfGallery.appendChild(layoutAllImages());

    const imageGroupBody3 = document.querySelector('#imageGroupBody');

    //removeAllChildNodes(imageGroupBody3);

    for(let i = 1; i<= 3; i++)
    {
        imageGroupBody3.appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    }   
}

function albumButtonClick()
{
    removeAllChildNodes(bodyOfGallery);
    layoutAlbumsAndImages();
}

function defaulAlbumClick()
{
    const imageGroupBody3 = document.querySelector('#imageGroupBody');

    //removeAllChildNodes(imageGroupBody3);

    for(let i = 1; i<= 3; i++)
    {
        imageGroupBody3.appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    }   
}

function imageClick()
{
    //when image is clicked on
    removeAllChildNodes(bodyOfGallery);
    layoutImageAndMettaData('test', 'https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png');
}

function albumClick()
{
    //when album is clicked on 
    const imageGroupBody = document.querySelector('#imageGroupBody');

    removeAllChildNodes(imageGroupBody);

    for(let i = 1; i<= 3; i++)
    {
        imageGroupBody.appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    }   
}

//whireing up all click events 
imageButton.onclick = imageButtonClick;

albumButton.onclick = albumButtonClick;

//all creation and removal functions

function removeAllChildNodes(parent) {
    //use this to change lay outs and use this to remove images when changing the albums
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function creatTextBox(text, name)
{
    //create

    const container = document.createElement('div');
    container.classList.add('flex-center-column');
    container.classList.add('textbox-container');

    const labelText = document.createElement('label');
    labelText.innerText = text;
    labelText.for = name;

    const textBox = document.createElement('input');
    textBox.classList.add('textbox');
    textBox.type = 'text';
    textBox.name = name;
    textBox.id = name;

    //append
    container.appendChild(labelText);
    container.appendChild(textBox);

    //return
    return container;
}


//singal images 
function creatImage(image)
{
    //returns the image so it can be appended denamically to the differnt layouts as needed 

    //creating everyting

    //image
    const Image = document.createElement('div');
    Image.classList.add('image');
    Image.style.backgroundImage = `url(${image})`;
    Image.onclick = imageClick;
    //returns image

    return(Image)
}

//singal album
function createAlbum(name)
{
    //create
    const album = document.createElement('div');
    album.classList.add('album');

    album.onclick = albumClick;

    const text = document.createElement('div');
    text.classList.add('albumText');
    text.innerText = name;

    //append
    album.appendChild(text);

    return album;
}


//diffrent layouts 

function layoutAllImages()
{
    //changes the lay ot of the page to show all images 
    //can be used with the search to dispaly images that meet the creteria of the search

    //ceate all elements 

    const imageGroup = document.createElement('div');
    imageGroup.classList.add('imageGroup');
    imageGroup.id = 'imageGroup';

    const imageGroupTitle = document.createElement('div');
    imageGroupTitle.classList.add('title')

    const titleLable = document.createElement('label');
    titleLable.innerText = 'Images';

    const imageGroupBody = document.createElement('div');
    imageGroupBody.classList.add('imageGroupBody');
    imageGroupBody.id = 'imageGroupBody';
    

    //append all elements

    imageGroupTitle.appendChild(titleLable);

    imageGroup.appendChild(imageGroupTitle);

    imageGroup.appendChild(imageGroupBody);

    return imageGroup;
}

function layoutImageAndMettaData(name, image)
{
    //changes the layout of the page to show one image and its mettadata

    //create all elements 

    const container = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('title');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = name;

    const imageWithMetta = document.createElement('div');
    imageWithMetta.classList.add('imageWithMetta');
    imageWithMetta.classList.add('flex-row');

    const ImageGroup = document.createElement('div');
    ImageGroup.classList.add('imageGroup');
    const Image = creatImage(image);

    const mettadata = document.createElement('div');
    mettadata.classList.add('Metta');
    mettadata.classList.add('flex-center-column');
    
    const topspace = document.createElement('div');
    topspace.classList.add('TopSpace');

    //creat all the metta data fields
    const nameTextBox = creatTextBox('Name', 'Name');
    const geoLocationTextBox = creatTextBox('GeoLocation', 'GeoLocation');
    const captuerByTextBox = creatTextBox('Captuered By', 'CaptuerBy');
    const captureDateTextBox = creatTextBox('Captuered Date', 'CaptureDate');
    
    //gotta do some thing for tags ???
    const tagTextBox = creatTextBox('Tag', 'Tag');

    const errorMessage = document.createElement('div');
    errorMessage.classList.add('flex-center-column');
    errorMessage.classList.add('textbox-container');

    //buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex-center-column');

    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.classList.add('btn');

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('btn');

    buttonContainer.appendChild(updateButton);
    buttonContainer.appendChild(deleteButton);

    //append all elements

    title.appendChild(titleLabel);

    ImageGroup.appendChild(Image);

    mettadata.appendChild(topspace);
    mettadata.appendChild(nameTextBox);
    mettadata.appendChild(geoLocationTextBox);
    mettadata.appendChild(captuerByTextBox);
    mettadata.appendChild(captureDateTextBox);
    mettadata.appendChild(tagTextBox);
    mettadata.appendChild(errorMessage);

    mettadata.appendChild(buttonContainer); 

    imageWithMetta.appendChild(ImageGroup);
    imageWithMetta.appendChild(mettadata);

    container.appendChild(title);
    container.appendChild(imageWithMetta);

    bodyOfGallery.appendChild(container);
}

function layoutAlbumsAndImages()
{
    //changes the layout of the page to show images according to the active album
    //always has default album and creat new album above the rest of the albums 

    const imagesAndAlbums = document.createElement('div');
    imagesAndAlbums.classList.add('imagesAndAlbums');
    
    const albums = document.createElement('div');
    albums.classList.add('albums');
    albums.classList.add('flex-center-column');

    const title = document.createElement('div');
    title.classList.add('title');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Albums';

    const headOfAlbums = document.createElement('div');
    headOfAlbums.style.width = '100%';

    //image group
    const imageGroup = layoutAllImages();

    //albums
    const newAlbum = createAlbum('New album');
    newAlbum.id = 'newAlbum';
    const Default = createAlbum('Default');
    Default.id = 'defaultAlbum';

    Default.onclick = defaulAlbumClick;
    
    const album3 = createAlbum('name3');
    const album4 = createAlbum('name4');

    //append all elements
    title.appendChild(titleLabel);

    albums.appendChild(title);

    albums.appendChild(headOfAlbums);

    imagesAndAlbums.appendChild(albums);
    
    imagesAndAlbums.appendChild(imageGroup);

    headOfAlbums.appendChild(newAlbum);
    headOfAlbums.appendChild(Default);
    albums.appendChild(album3);
    albums.appendChild(album4);


    bodyOfGallery.appendChild(imagesAndAlbums);
}

//tests of stuff
if (1)
{
    layoutAlbumsAndImages();
    const imageGroupBody = document.querySelector('#imageGroupBody');

    for(let i = 1; i<= 3; i++)
    {
       imageGroupBody.appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    }   


}

