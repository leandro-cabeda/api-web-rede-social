const data = require('../database/db.json');
const { formatList, formatListProfileByfriends, formatFindProfileById } = require('../utils');

const list = () => data;

const listByName = args => formatList(args, data);

const listProfileByFriends = args => formatListProfileByfriends(args, data);

const findProfileById = args => formatFindProfileById(args, data);


module.exports = {
    list,
    listByName,
    listProfileByFriends,
    findProfileById
}