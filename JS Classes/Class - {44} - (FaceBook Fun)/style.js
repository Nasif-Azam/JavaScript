function check() {

    let database = [{
            username: "Nasif",
            password: "nasif12",
        },
        {
            username: "Khushi",
            password: "khushi12",
        }
    ];

    let statusNasif = [{
            name: "Ishrat Jahan",
            status: "Nasif make me smile :)",
        },
        {
            name: "Rhythm",
            status: "Fifa looser",
        },
        {
            name: "Nasif",
            status: "Khushi make me smile :)",
        }
    ];
    let statusKhushi = [{
            name: "A",
            status: "Nasif make me smile :)",
        },
        {
            name: "B",
            status: "Fifa looser",
        },
        {
            name: "C",
            status: "Khushi make me smile :)",
        }
    ];


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    function login(user, pass) {
        if ((user === database[0].username) && pass === database[0].password) {
            window.location = "nasif.html";
            console.log(statusNasif);
            for (let value of statusNasif) {
                console.log(value);
            }
        } else if ((user === database[1].username) && pass === database[1].password) {
            window.location = "khushi.html";
            console.log(statusKhushi);
            for (let value of statusKhushi) {
                console.log(value);
            }
        } else {
            alert("Incorrect")
        }

    }
    login(username, password);

}