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
  "id": "usda-fndds-2705642",
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
  "name": "Ice cream sandwich, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 35.9,
    "energy_kcal": 264.0,
    "fat_g": 11.8,
    "fibre_g": 1.4,
    "folate_ug": 16.0,
    "iron_mg": 1.07,
    "magnesium_mg": 24.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 112.0,
    "potassium_mg": 202.0,
    "protein_g": 4.28,
    "salt_g": 0.5125,
    "sat_fat_g": 6.15,
    "sodium_mg": 205.0,
    "sugar_g": 25.3,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705642",
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
