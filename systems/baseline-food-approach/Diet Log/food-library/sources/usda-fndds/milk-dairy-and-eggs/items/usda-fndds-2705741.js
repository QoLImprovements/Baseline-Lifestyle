/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese",
  "id": "usda-fndds-2705741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup-melted",
      "kind": "unit",
      "label": "1 cup, melted"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-shredded",
      "kind": "unit",
      "label": "1 cup, shredded"
    }
  ],
  "name": "Cheese, Mexican blend",
  "nutritionPerBasis": {
    "calcium_mg": 665.0,
    "carbs_g": 2.4,
    "energy_kcal": 362.0,
    "fat_g": 29.3,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.05,
    "magnesium_mg": 28.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 438.0,
    "potassium_mg": 93.0,
    "protein_g": 21.9,
    "salt_g": 1.775,
    "sat_fat_g": 17.0,
    "sodium_mg": 710.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 213.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705741",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
