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
  "id": "usda-fndds-2705752",
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
  "name": "Cheese, cottage, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 5.63,
    "energy_kcal": 79.0,
    "fat_g": 1.98,
    "fibre_g": 0.7,
    "folate_ug": 11.0,
    "iron_mg": 0.23,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 133.0,
    "potassium_mg": 127.0,
    "protein_g": 9.78,
    "salt_g": 0.695,
    "sat_fat_g": 1.08,
    "sodium_mg": 278.0,
    "sugar_g": 3.95,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705752",
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
