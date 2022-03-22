import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./Products.css"

function Products() {
    const [sportEquipment, setSportEquipment] = useState([]);
    const [filteredList, setFilteredList] = useState(sportEquipment);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const filterByBrand = (filteredData) => {
        if (!selectedBrand){
            return filteredData;
        }

        const filteredProducts = filteredData.filter(
            (product) => product.equipment_brand_id
        );
        console.log(filteredProducts)
        return filteredProducts;
    }
    const filterByCategory = (filteredData) => {
        const collectedCategory = {
            category_id: [],
            type: []
        }
        const {category_id, type} = filteredList;

        for (let category_idKey in category_id) {
            if (category_id[category_idKey]) collectedCategory.category_id.push(category_idKey)
        }

        for(let typeKey in type) {
            if (type[typeKey]) collectedCategory.type.push(typeKey)
        }

        const filteredProducts = filteredData.filter(
            (product) => product.collectedCategory
        );
        console.log(collectedCategory)
        return collectedCategory;

       
    }

    const handleBrandChange = (event) => {
        setSelectedBrand(event.equipment_brand_id);
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.category_id);
    }
    useEffect(() => {
        var filteredData = filterByBrand(sportEquipment);
        filteredData = filterByCategory(filteredData);
        setFilteredList(filteredData)
        Axios.get("http://localhost:3001/api/products")
            .then((response) => {
                setSportEquipment(response.data);
                setFilteredList(response.data)
            })
    }, [selectedBrand, selectedCategory])
    return (
        <div className='content__field'>
            {sportEquipment.map((value, index) => {
                return (
                    <div className='filterButtons' key={index.id}>
                        <section>
                            <div class="form-check">
                                <input class="form-check-input" key={value.equipment_brand_id} type="checkbox" value={selectedBrand} onChange={handleBrandChange} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {value.brand}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" key={value.category_id} type="checkbox" value={selectedCategory} onChange={handleCategoryChange} id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {value.type}
                                </label>
                            </div>
                        </section>
                    </div>
                )
            })
            }
            {sportEquipment.map((val) => {
                return (
                    <>
                        <section class="uslugi-cards clearfix">
                            <article class="card1">
                                <article class="card">
                                    <div class="card-img">
                                        <img src={val.image_path} alt="" class="card-picture" />
                                    </div>
                                    <div class="card-text">
                                        <h4>{val.brand}</h4>
                                        <p>{val.description}.</p>
                                    </div>
                                </article>
                            </article>
                        </section>
                    </>
                );
            })}
        </div>
    );
}

export default Products;