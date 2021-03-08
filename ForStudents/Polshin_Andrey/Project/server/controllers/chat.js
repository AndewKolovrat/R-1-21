const fs = require('fs');
const path = './server/db/chats';

module.exports = {
    async load(req, res) {
        try {
            console.log('try getchats');
            const result = await fs.readFileSync(path + '/chats.json', 'utf-8');
            res.json(result);
        }
        catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
};