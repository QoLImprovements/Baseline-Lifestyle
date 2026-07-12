/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese sandwiches",
  "id": "usda-fndds-2705807",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Grilled cheese sandwich, reduced fat cheese, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 277.0,
    "carbs_g": 27.4,
    "energy_kcal": 305.0,
    "fat_g": 16.2,
    "fibre_g": 2.8,
    "folate_ug": 38.0,
    "iron_mg": 1.71,
    "magnesium_mg": 41.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 388.0,
    "potassium_mg": 220.0,
    "protein_g": 12.3,
    "salt_g": 1.835,
    "sat_fat_g": 7.5,
    "sodium_mg": 734.0,
    "sugar_g": 5.64,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705807",
  "state": "Grilled",
  "subcategory": "Cheese sandwiches",
  "tags": [
    "cheese-sandwiches",
    "grilled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
