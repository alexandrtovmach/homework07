var _ = require('lodash');
import avatarImg from '../img/a.jpg'

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
			const img = document.createElement("img");
			img.src = avatarImg
            div.append(img)
			div.innerHTML += user.name + ' ' + user.age;
            container.appendChild(div);
        });
    }
}

module.exports = userList;