/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cottage/ricotta cheese",
  "id": "usda-fndds-2705757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cheese, cottage, lowfat, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 10.3,
    "energy_kcal": 85.0,
    "fat_g": 1.57,
    "fibre_g": 0.3,
    "folate_ug": 12.0,
    "iron_mg": 0.1,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 98.0,
    "potassium_mg": 122.0,
    "protein_g": 7.3,
    "salt_g": 0.5225,
    "sat_fat_g": 0.822,
    "sodium_mg": 209.0,
    "sugar_g": 9.31,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705757",
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
