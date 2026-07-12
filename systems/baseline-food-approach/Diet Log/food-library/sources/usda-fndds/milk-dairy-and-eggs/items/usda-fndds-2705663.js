/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ice cream, fried",
  "nutritionPerBasis": {
    "calcium_mg": 112.0,
    "carbs_g": 32.8,
    "energy_kcal": 282.0,
    "fat_g": 15.2,
    "fibre_g": 1.2,
    "folate_ug": 21.0,
    "iron_mg": 0.79,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 115.0,
    "potassium_mg": 184.0,
    "protein_g": 3.94,
    "salt_g": 0.3975,
    "sat_fat_g": 6.67,
    "sodium_mg": 159.0,
    "sugar_g": 20.9,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705663",
  "state": "Fried",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "fried",
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
