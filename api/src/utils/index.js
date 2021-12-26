const formatList = (args, data) => {

    const name = args.name.toLowerCase().split(" ");

    return data.filter(perfil => {
        let cont = 0;
        let flag = false;

        perfil.name.toLowerCase().split(" ").forEach(n => {

            if (name.find(f => n.includes(f))) {
                cont++;
            }

        });

        if (cont == name.length) flag = true;

        return flag;
    });
}


const formatListProfileByfriends = (args, data) => {

    const perfilListFriends = data.find(perfil => perfil._id === args._id);

    if (perfilListFriends) {

        const name = args.name.toLowerCase().split(" ");

        return perfilListFriends.friends.filter(friend => {
            let cont = 0;
            let flag = false;

            friend.name.toLowerCase().split(" ").forEach(n => {

                if (name.find(f => n.includes(f))) {
                    cont++;
                }

            });

            if (cont == name.length) flag = true;

            return flag;
        });
    }

    return [];
}


const formatFindProfileById = (args, data) => {

    const findPerfilById = data.find(perfil => perfil._id === args._id);

    return findPerfilById;
}

module.exports = {
    formatList,
    formatListProfileByfriends,
    formatFindProfileById
}