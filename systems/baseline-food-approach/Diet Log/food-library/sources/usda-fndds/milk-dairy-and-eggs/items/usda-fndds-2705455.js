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
  "id": "usda-fndds-2705455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Frozen yogurt, soft serve, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 24.9,
    "energy_kcal": 160.0,
    "fat_g": 5.76,
    "fibre_g": 0.7,
    "folate_ug": 7.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 237.0,
    "protein_g": 4.31,
    "salt_g": 0.215,
    "sat_fat_g": 3.51,
    "sodium_mg": 86.0,
    "sugar_g": 23.6,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705455",
  "state": "Frozen",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "frozen",
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
