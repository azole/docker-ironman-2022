const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.get('/conferences', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        title: 'Web Conf 2023',
        url: 'https://webconf.tw/',
        date: '2023/08/11',
      },
      {
        id: 2,
        title: 'Laravel x Vue Conf Taiwan 2023',
        url: 'https://laravelconf.tw/',
        date: '2023/08/19',
      },
      {
        id: 3,
        title: 'HITCON',
        url: 'https://hitcon.org/2023/CMT/',
        date: '2023/08/18',
      },
      {
        id: 4,
        title: 'PyCon TW',
        url: 'https://tw.pycon.org/2023/zh-hant',
        date: '2023/09/02',
      },
      {
        id: 5,
        title: 'DevOpsDays',
        url: 'https://devopsdays.tw/2023/',
        date: '2023/09/25',
      },
      {
        id: 6,
        title: 'JCConf',
        url: 'https://jcconf.tw/2023/',
        date: '2023/10/06',
      },
      {
        id: 7,
        title: 'Kubernetes Summit 2023',
        url: 'https://k8s.ithome.com.tw/2023/',
        date: '2023/10/25',
      },
    ],
  });
});

app.use((err, req, res) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log('Server is running...');
});
