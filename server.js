//------------------------------------------DATE------------------------------------------------------------------
const Api1 =
  "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";

window
  .fetch(Api1)
  .then(data1 => {
    data1
      .json()
      .then(users1 => {
        // console.log(users1.data.lastRefreshed);

        let dates = users1.data.lastRefreshed;

        var output2 = "";

        output2 += `
          
        <h3>
          LAST UPDATED ON ⌚️ : ${users1.data.lastRefreshed}
        </h3>
        `;
        document.getElementById("date").innerHTML = output2;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//-----------------------------------------MAIN DATA--------------------------------------------------------------------
const Api =
  "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";

window
  .fetch(Api)
  .then(data => {
    data
      .json()
      .then(users => {
        // console.log(users.data.statewise);

        var output = [];

        for (let user of users.data.statewise) {
          output += `
           <div class="container">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">STATES/UT</th>
              <th scope="col">CONFIRMED</th>
              <th scope="col">ACTIVE</th>
              <th scope="col">RECOVERED</th>
              <th scope="col">DEATH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${user.state}</td>
              <td>${user.confirmed}</td>
              <td>${user.active}</td>
              <td>${user.recovered}</td>
              <td>${user.deaths}</td>
            </tr>
          </tbody>
        </table>
        </div>
            `;
          document.getElementById("root").innerHTML = output;
        }
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//---------------------------------------------total--------------------------------------------------------------

const Api3 =
  "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";

window
  .fetch(Api3)
  .then(data3 => {
    data3
      .json()
      .then(users3 => {
        let x = users3.data.total;
        console.log(x);

        var output = "";
        output += `
        
          <h1>TOTAL CASE COUNT IN INDIA ☠️</h1>
          <h3>CONFIRM : ${x.confirmed} 🔺</h3>
          <h3>ACTIVE : ${x.active} ⛑</h3>
          <h3>RECOVERED : ${x.recovered} 💚</h3>
          <h3>DEATH : ${x.deaths} ❌</h3>
        </div>
            `;

        document.getElementById("root3").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
