module.exports = function(app){


    let candies = [
        {id: 1, name: "Chewing Gum" , color: "Red"   },
        {id: 2, name: "Pez"         , color: "Green" },
        {id: 3, name: "Marshmallow" , color: "Pink"  },
        {id: 4, name: "Candy Stick" , color: "Blue"  }
    ];

    // Index
    app.get('/candies', (req, res)=> {
        res.json(candies);
    })

    // Show
    app.get('/candies/:id', (req, res) => {
        const id = req.params.id;
        let candy = candies.filter((candy) => {
            return candy.id == id;
        })[0];
        res.json(candy)
    });

    // Create
    app.post('/candies', (req, res) => {
        candies.push(req.body);
        // show entire array
        res.json(candies);
    });

    // Update
    app.put('/candies/:id', (req, res) => {
        const id = req.params.id;
        let candy = candies.filter((candy) => {
            return candy.id == id;
        })[0];
        candy.name = req.body.name;
        candy.color = req.body.color;
        res.json(candy);

    })

    // Delete
    app.delete('/candies/:id', (req, res)=> {

        const id = req.params.id;

        candies = candies.filter((candy)=>{
            return candy.id != id;
        });

        res.json({"message":"deleted"});
    });



}
