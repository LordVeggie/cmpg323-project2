//this is where i will add the denamic content ofthe page to 
const bodyOfGallery = document.querySelector('#bodyOfGallery');

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


<div class="">//

    <div class=" title ">//
        <label for="title"> some image </label>//
    </div>
    
    <div class="imageWithMetta flex-row">
        <!-- images and maettadata -->
        <div class=" imageGroup ">
    
            <div class="image"></div>
        </div>
    
        <div class="Metta flex-center-column">
    
            <div class=" TopSpace ">
                <!--blanck space-->
            </div>
    
            <div class="flex-center-column textbox-container">
                <!--this will be first name field-->
                <label for="Name">Name</label>
                <input type="text" name="Name" id="Name" required class="textbox">
            </div>
    
            <div class="flex-center-column textbox-container">
                <!--this will be last name field-->
                <label for="lname">Last name</label>
                <input type="text" name="lname" id="lname" required class="textbox">
            </div>
    
            <div class="flex-center-column textbox-container">
                <!--this will be user name field-->
                <label for="uname">User name</label>
                <input type="text" name="uname" id="uname" required class="textbox">
            </div>
    
            <div class="flex-center-column textbox-container">
                <!--this will be password fiels-->
                <label for="pass">Password</label>
                <input type="password" name="pass" id="pass" required class="textbox">
            </div>
    
            <div class="flex-center-column textbox-container">
                <!--this will be confirm password fiels-->
                <label for="passCon">Confirm Password</label>
                <input type="password" name="passCon" id="passCon" required class="textbox">
            </div>
    
            <div class="flex-center-column textbox-container">
                <!--this will be used for error messages-->
            </div>
    
            <div class="flex-center-column">
                <!--this will be submit button-->
                <!--if inpout is correct and validated navigate user to home page else error meassage-->
                <button class="btn">Update</button>
                <button class="btn">Delete</button>
            </div>
    
        </div>
    
    </div>

</div>


function layoutImageAndMettaData(name)
{
    //changes the layout of the page to show one image and its mettadata

    //ceate all elements 

    const container = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('title')

    const titleLabel = document.createElement('label');
    titleLabel.innerText = name;

    const imageWithMetta = document.createElement('div');



    //append all elements

}

function layoutAlbumsAndImages()
{
    //changes the layout of the page to show images according to the active album
    //always has default album and creat new album above the rest of the albums 

}

//tests of stuff
if (0)
{
    layoutAllImages().appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    const imageGroup = document.querySelector('#imageGroup');
    
    for(let i = 1; i<= 10; i++)
    {
        imageGroup.appendChild(creatImage('https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png'));
    }    
}
