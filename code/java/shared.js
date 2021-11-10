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

<div class="chat myChat read">

    <div class="cahtStatus">
        R
    </div>

    <div class="image">

    </div>

    <div class="chatText">
        here is the new logo tim
    </div>

    <div class="cahtTime">
        10:00
     </div>

</div>

function myChat(status, time, text = '', image = '')
{
    //creating everyting

    //bounding box of the chat
    const chat = document.createElement('div');
    friendContainer.classList.add('friend');

    //status
    const text = document.createElement('div');
    text.classList.add('chatText');
    text.innerText = username;

    //image
    if(image !== '')
    {
        const text = document.createElement('div');
        text.classList.add('chatText');
        text.innerText = username;
    }
    
    //text
    const chatText = document.createElement('div');
    chatText.classList.add('chatText');
    chatText.innerText = username;

    //time
    const chatTime = document.createElement('div');
    chatTime.classList.add('chatText');
    chatTime.innerText = time;

    //appending everyting

    chat.appendChild(text);
    if(image !== '')
    {
        chat.appendChild(text);
    }
    chat.appendChild(chatText);
    chat.appendChild(chatTime);

    firenList.appendChild(chat);
    
    
}

function otherChat(status, time, text = '', image = '')
{

}

function createChat(id1, id2, status1, status2,time, text = '', image = '')
{
    //test the status to see the color of the caht borde, status and time
    //test the ids to see on what side the chat should be l or r
    if(id1 === 1)
    {
        //my chat
         //makes chat green or red
         myChat();
    }
    else if(id2 !== 1)
    {
        //other persons caht
        //makes chat green or red
        otherChat();
    }
}




//tests for functions
for(let i = 1; i<=5;i++)
{
    friend('bobbyyyyyys '+i)
}

