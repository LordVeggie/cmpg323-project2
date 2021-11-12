//this is where i will add the denamic content ofthe page to 
const bodyOfGallery = document.querySelector('#bodyOfGallery');

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

    //returns image

    return(Image)
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

    //append all elements

    imageGroupTitle.appendChild(titleLable);

    imageGroup.appendChild(imageGroupTitle);

    bodyOfGallery.appendChild(imageGroup);

    return imageGroup;
}

function layoutImageAndMettaData(name, image)
{
    //changes the layout of the page to show one image and its mettadata

    //create all elements 

    const container = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('title')

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

}

//tests of stuff
if (1)
{
    layoutAllImages().appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    const imageGroup = document.querySelector('#imageGroup');
    
    for(let i = 1; i<= 10; i++)
    {
        imageGroup.appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    }    

    imageGroup.appendChild(creatTextBox('test test', 'test'));

    imageGroup.appendChild(creatTextBox('test test', 'test2'));

    imageGroup.appendChild(creatTextBox('test test', 'test3'));

    layoutImageAndMettaData('some random logo', 'https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png');
}
