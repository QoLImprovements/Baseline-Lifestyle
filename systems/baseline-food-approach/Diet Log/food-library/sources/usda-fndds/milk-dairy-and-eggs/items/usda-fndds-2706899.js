/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cheeseburger",
  "description": "Burgers",
  "id": "usda-fndds-2706899",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Whopper with cheese (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 17.7,
    "energy_kcal": 268.0,
    "fat_g": 15.8,
    "fibre_g": 1.1,
    "folate_ug": 51.0,
    "iron_mg": 2.3,
    "magnesium_mg": 18.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 125.0,
    "potassium_mg": 208.0,
    "protein_g": 13.7,
    "salt_g": 1.1825,
    "sat_fat_g": 5.75,
    "sodium_mg": 473.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706899",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
