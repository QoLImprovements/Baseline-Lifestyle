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
  "id": "usda-fndds-2705456",
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
  "name": "Frozen yogurt sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 34.4,
    "energy_kcal": 204.0,
    "fat_g": 6.25,
    "fibre_g": 0.8,
    "folate_ug": 15.0,
    "iron_mg": 1.35,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 100.0,
    "potassium_mg": 170.0,
    "protein_g": 3.9,
    "salt_g": 0.48,
    "sat_fat_g": 2.8,
    "sodium_mg": 192.0,
    "sugar_g": 24.3,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705456",
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
