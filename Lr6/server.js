const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const accessToken = 'vk1.a.f4iDPsaFg-l89KVZodeAHCWMR19a1nkCRyXhQjbfCkT6Iyz0vO2VSU9XO9JiIPCo7tH-Jziu8u18-1w1GT8Z9b7yHVjrpoU-9JzrW6v8n4X7hzMZclHp-rjTG2f6rH4u3xhQtom36esAdAVw8dq-446hoAGkibFeViY_1LEtab-Uz2zaQTZtzUB0iJRGy30NH_IDVgmRV99iyEQFewJxaw'
const groupId = 223919067
let UserInfo = null;
let Members = null;

async function fetchData(groupId) {
    try {
        const response = await axios.get('https://api.vk.com/method/groups.getMembers', {
            params: {
                group_id: groupId,
                fields: 'photo_400_orig',
                access_token: accessToken,
                filter: 'friends',
                v: '5.199'
            }
        });
        Members = response.data;
    } catch (error) {
        throw new Error('Ошибка при получении данных: ' + error.message);
    }
}
app.post('/get-members', async (req, res) => {
    try {
        await fetchData(groupId);
        res.json(Members || {});
    } catch (error) {
        res.status(500).send(error.message);
    }
});
async function fetchData2(userId) {
    try {
        const response = await axios.get('https://api.vk.com/method/users.get', {
            params: {
                user_ids: userId,
                fields: 'photo_400_orig,status',
                access_token: accessToken,
                filter: 'friends',
                v: '5.199'
            }
        });
        UserInfo = response.data;
    } catch (error) {
        throw new Error('Ошибка при получении данных: ' + error.message);
    }
}
app.post('/get-userInfo', async (req, res) => {
    try {
        const { userId } = req.query;
        await fetchData2(userId);
        res.json(UserInfo || {});
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});