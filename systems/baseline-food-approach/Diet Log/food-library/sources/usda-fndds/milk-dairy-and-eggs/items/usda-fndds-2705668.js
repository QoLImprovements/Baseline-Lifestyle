/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-sandwich",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Light ice cream sandwich, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 37.3,
    "energy_kcal": 239.0,
    "fat_g": 8.15,
    "fibre_g": 1.0,
    "folate_ug": 16.0,
    "iron_mg": 1.14,
    "magnesium_mg": 22.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 100.0,
    "potassium_mg": 204.0,
    "protein_g": 4.93,
    "salt_g": 0.5225,
    "sat_fat_g": 3.68,
    "sodium_mg": 209.0,
    "sugar_g": 20.1,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705668",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
