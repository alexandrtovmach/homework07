import _ from 'lodash';
import avatarImg from '../img/a.jpg';

//general function of create user
const userList = function(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
			const img = document.createElement("img");
			img.src = __dirname + avatarImg;
            div.append(img);
			div.innerHTML += user.name + ' ' + user.age;
            container.appendChild(div);
        });
    };
};
export default userList;