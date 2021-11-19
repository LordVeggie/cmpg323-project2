//this is where i will add the denamic content ofthe page to 
const bodyOfFriendPage = document.querySelector('#bodyOfFriendPage');

//all click event

function firendClick()
{
    
}

function newFriendClick()
{
    newFirendChat();
}

//whireing up all click events 

//all creation and removal functions

function removeAllChildNodes(parent)
{
    //use this to change lay outs and use this to remove images when changing the albums
    while (parent.firstChild) 
    {
        parent.removeChild(parent.firstChild);
    }
}

function createFriend(name)
{

    //create
    const friend = document.createElement('div');
    friend.classList.add('friend');

    const friendsText = document.createElement('div');
    friendsText.classList.add('friendsText');
    friendsText.innerText = name;

    //append

    friend.appendChild(friendsText);

    //return

    return friend;
}

function createFriendList()
{
    //create
    const container = document.createElement('div');
    container.classList.add('frendListComntainer');
    
    const friendList = document.createElement('div');
    friendList.classList.add('friendList');

    const friendsTitle = document.createElement('div');
    friendsTitle.classList.add('friendsTitle');

    const friendListTitle = document.createElement('div');
    friendListTitle.classList.add('friendListTitle');
    friendListTitle.innerText = 'Friends';

    const TopSpace = document.createElement('div');
    TopSpace.classList.add('TopSpace');

    const friendSlistTop  = document.createElement('div');

    const friendSlist = document.createElement('div');
    friendList.id = 'friendList';

    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');

    newFriend.onclick = newFriendClick;

    const friendsText = document.createElement('div');
    friendsText.classList.add('friendsText');
    friendsText.innerText = 'Add new friend';    

    //append

    newFriend.appendChild(friendsText);

    friendsTitle.appendChild(friendListTitle);

    
    friendSlistTop.appendChild(friendsTitle);
    friendSlistTop.appendChild(TopSpace);
    friendSlistTop.appendChild(newFriend);

    
    friendList.appendChild(friendSlistTop);
    friendList.appendChild(friendSlist);
    
    container.appendChild(friendList);

    bodyOfFriendPage.appendChild(container);
}

function newFirendChat()
{

}

function friendChat()
{

}

function createFriendPage()
{
    createFriendList();
}
//diffrent layouts 

//tests of stuff
if (1)
{
    removeAllChildNodes(bodyOfFriendPage);
    createFriendPage();

    const friendList = document.querySelector('#friendList');

    friendList.appendChild(createFriend('bobby'));
    friendList.appendChild(createFriend('tim'));
    friendList.appendChild(createFriend('jim'));
}
