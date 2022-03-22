const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "intekodb",
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {

    // SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
    // FROM Orders
    // INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;


    const sqlSelect = "SELECT * FROM sport_equipment CROSS JOIN equipment_brand, equipment_category, equipment_photo WHERE sport_equipment.equipment_brand_id = equipment_brand.equipment_brand_id AND sport_equipment.category_id = equipment_category.category_id AND sport_equipment.sport_equipment_id = equipment_photo.sport_equipment_id;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })

});
app.get("/api/products/:id", (req, res) => {


    const sqlSelect = "SELECT * FROM sport_equipment CROSS JOIN equipment_brand, equipment_category, equipment_photo WHERE sport_equipment.equipment_brand_id = equipment_brand.equipment_brand_id AND sport_equipment.category_id = equipment_category.category_id AND sport_equipment.sport_equipment_id = equipment_photo.sport_equipment_id;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })

});

// getProductByCategory = (category_id, res) => {
//     db.query('SELECT * FROM sport_equipment, equipment_category WHERE sport_equipment.category_id IN (?, ?)', category_id, (err, result) => {
//         if (err) {
//             console.log("Error", err);
//             res.send(null, err)
//         } else {
//             res.send(result);
//         }
//     })
// }

// app.get("/api/category_id", getProductByCategory);

app.get("/api/objects", (req, res) => {

    const sqlSelect = "SELECT * FROM sport_object CROSS JOIN object_type, object_photo WHERE sport_object.object_type_id = object_type.object_type_id AND object_photo.object_photo_id = object_photo.object_photo_id;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })

});

// app.get("/api/systems", (req, res) => {
   
//     db.query(itemss, (err, result) => {
//         res.send(result)
//     })
// })

app.listen(3001, () => {
    console.log("running on port 3001")
})