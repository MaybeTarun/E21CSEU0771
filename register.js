// fetch('http://20.244.56.144/test/register', {
//   method: 'POST',
//   body: JSON.stringify({
//     "companyName": "Bennett University",
//     "ownerName": "Tarun",
//     "rollNo": "e21cseu0771",
//     "ownerEmail": "tarun234.tg@gmail.com",
//     "accessCode": "XImuYx",
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('http://20.244.56.144/test/auth', {
//   method: 'POST',
//   body: JSON.stringify({
//     companyName: 'Bennett University',
//     clientID: '37839253-34b6-415e-a0ca-2964301da1d3',
//     clientSecret: 'tCcQrasglmyZGxuu',
//     ownerName: 'Tarun',
//     ownerEmail: 'tarun234.tg@gmail.com',
//     rollNo: 'e21cseu0771'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


fetch('http://20.244.56.144/test/primes', {
  headers: {
    token_type: 'Bearer',
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0MDQxNDk5LCJpYXQiOjE3MTQwNDExOTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3ODM5MjUzLTM0YjYtNDE1ZS1hMGNhLTI5NjQzMDFkYTFkMyIsInN1YiI6InRhcnVuMjM0LnRnQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkJlbm5ldHQgVW5pdmVyc2l0eSIsImNsaWVudElEIjoiMzc4MzkyNTMtMzRiNi00MTVlLWEwY2EtMjk2NDMwMWRhMWQzIiwiY2xpZW50U2VjcmV0IjoidENjUXJhc2dsbXlaR3h1dSIsIm93bmVyTmFtZSI6IlRhcnVuIiwib3duZXJFbWFpbCI6InRhcnVuMjM0LnRnQGdtYWlsLmNvbSIsInJvbGxObyI6ImUyMWNzZXUwNzcxIn0.EfQaDglhbqZJrx5fffY-Qz9mPt7VmZN2Ux-9L_gSRQ8',
    expires_in: 1714041499
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
