/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cottage/ricotta cheese",
  "id": "usda-fndds-2705751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese, cottage, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 4.94,
    "energy_kcal": 74.0,
    "fat_g": 1.96,
    "fibre_g": 0.2,
    "folate_ug": 9.0,
    "iron_mg": 0.15,
    "magnesium_mg": 9.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 127.0,
    "potassium_mg": 116.0,
    "protein_g": 9.41,
    "salt_g": 0.6825,
    "sat_fat_g": 1.07,
    "sodium_mg": 273.0,
    "sugar_g": 4.61,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705751",
  "state": "Unspecified",
  "subcategory": "Cottage/ricotta cheese",
  "tags": [
    "cottage-ricotta-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
