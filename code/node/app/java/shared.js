const firenList = document.querySelector('#firenList')
const chats = document.querySelector('#chats')

//firends 

function friend(username)
{
    //creating everyting

    //bounding box of the friend
    const friendContainer = document.createElement('div');
    friendContainer.classList.add('friend');

    //text
    const text = document.createElement('div');
    text.classList.add('chatText');
    text.innerText = username;

    //appending everyting

    friendContainer.appendChild(text);

    firenList.appendChild(friendContainer);
}

//chat bubbels


function myChat(status, time, text = '', image = '')
{
    //creating everyting

    //bounding box of the chat
    const chat = document.createElement('div');
    chat.classList.add('chat');
    chat.classList.add('myChat');

    if(status === true)
    {
        chat.classList.add('read');
        status = 'R';
    }
    else
    {
        chat.classList.add('sent');
        status = 'S';
    }

    //status
    const chatStatus = document.createElement('div');
    chatStatus.classList.add('cahtStatus');
    chatStatus.innerText = status;

    //image
    const chatImage = document.createElement('div');
    if(image !== '')
    {
        chatImage.classList.add('image');
        chatImage.style.backgroundImage = `url(${image})`;
    }
    
    //text
    const chatText = document.createElement('div');
    chatText.classList.add('chatText');
    chatText.innerText = text;

    //time
    const chatTime = document.createElement('div');
    chatTime.classList.add('cahtTime');
    chatTime.innerText = time;

    //appending everyting

    chat.appendChild(chatStatus);
    if(image !== '')
    {
        chat.appendChild(chatImage);
    }
    chat.appendChild(chatText);
    chat.appendChild(chatTime);

    chats.appendChild(chat); 
}

function otherChat(status, time, text = '', image = '')
{
    //creating everyting

    //bounding box of the chat
    const chat = document.createElement('div');
    chat.classList.add('chat');
    chat.classList.add('otherChat');

    if(status === true)
    {
        chat.classList.add('read');
        status = 'R';
    }
    else
    {
        chat.classList.add('sent');
        status = 'S';
    }

    //status
    const chatStatus = document.createElement('div');
    chatStatus.classList.add('cahtStatus');
    chatStatus.innerText = status;

    //image
    const chatImage = document.createElement('div');
    if(image !== '')
    {
        chatImage.classList.add('image');
        chatImage.style.backgroundImage = `url(${image})`;
    }
    
    //text
    const chatText = document.createElement('div');
    chatText.classList.add('chatText');
    chatText.innerText = text;

    //time
    const chatTime = document.createElement('div');
    chatTime.classList.add('cahtTime');
    chatTime.innerText = time;

    //appending everyting

    chat.appendChild(chatStatus);
    if(image !== '')
    {
        chat.appendChild(chatImage);
    }
    chat.appendChild(chatText);
    chat.appendChild(chatTime);

    chats.appendChild(chat); 
}

function createChat(id1, id2, status1, status2, time, text = '', image = '')
{
    //test the status to see the color of the caht borde, status and time
    //test the ids to see on what side the chat should be l or r
    if(id1 === 1)
    {
        //my chat
         //makes chat green or red
         myChat(status1, time, text, image);
    }
    else if(id2 === 1)
    {
        //other persons caht
        //makes chat green or red
        otherChat(status2, time, text, image);
    }
}




//tests for functions
for(let i = 1; i<=5;i++)
{
    friend('bobbyyyyyys '+i)
}


createChat(1, 2, true, true, '8:19am', 'hello here is the new loggo', 'https://wl-brightside.cf.tsp.li/resize/1200x630/jpg/91d/63f/44486f5de79c81f99f044e8615.jpg');

createChat(1, 2, true, true, '8:20am', 'hello here is the new loggo', image = '');

createChat(2, 1, true, true, '8:19am', 'hello here is the new loggo', 'https://wl-brightside.cf.tsp.li/resize/1200x630/jpg/91d/63f/44486f5de79c81f99f044e8615.jpg');

createChat(2, 1, true, false, '8:20am', 'hello here is the new loggo', image = '');

