//this is where i will add the denamic content ofthe page to 
const bodyOFHome = document.querySelector('#bodyOfHome')
const notificationGroup = document.querySelector('#notificationGroup');

//notification functions

function notification(notificationText)
{
    //creating everyting

    //bounding box of the notification
    const notificationContainer = document.createElement('div');
    notificationContainer.classList.add('notification');

    //text
    const text = document.createElement('div');
    text.classList.add('notificationText');
    text.innerText = notificationText;

    //buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('notificationButons');

    //buttons
    const buttonDismiss = document.createElement('button');
    buttonDismiss.classList.add('btn');
    buttonDismiss.innerText = 'Dismiss';

    //appending everyting

    buttonContainer.appendChild(buttonDismiss);

    notificationContainer.appendChild(text);
    notificationContainer.appendChild(buttonContainer);

    notificationGroup.appendChild(notificationContainer);
}

function notificationFriendRequest(username, notificationText)
{
    //creating everyting

    //bounding box of the notification
    const notificationContainer = document.createElement('div');
    notificationContainer.classList.add('notification');

    //text
    const text = document.createElement('div');
    text.classList.add('notificationText');
    text.innerText = `${username} ${notificationText}`;

    //buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('notificationButons');

    //buttons
    const buttonAccept = document.createElement('button');
    buttonAccept.classList.add('btn');
    buttonAccept.innerText = 'Accept';

    const buttonReject = document.createElement('button');
    buttonReject.classList.add('btn');
    buttonReject.innerText = 'Reject';

    //appending everyting

    buttonContainer.appendChild(buttonAccept);
    buttonContainer.appendChild(buttonReject);

    notificationContainer.appendChild(text);
    notificationContainer.appendChild(buttonContainer);

    notificationGroup.appendChild(notificationContainer);
}

function creatNotification(type, text, username ='')
{
    if (type === 1 )
    {
        //this notificaton can only be dismissed
        notification(text)
    }
    else if (type === 2 )
    {
        notificationFriendRequest(username, text)
    }
}

for(let i = 1; i<=2; i++)
{
    creatNotification(1, 'your friend request has been accepted');
}

creatNotification(2,'wants to be friends','Jhon Wick');
