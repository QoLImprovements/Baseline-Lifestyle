/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    }
  ],
  "name": "Ice cream cone, scooped, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 25.8,
    "energy_kcal": 215.0,
    "fat_g": 10.8,
    "fibre_g": 0.8,
    "folate_ug": 12.0,
    "iron_mg": 0.23,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 105.0,
    "potassium_mg": 196.0,
    "protein_g": 3.68,
    "salt_g": 0.2175,
    "sat_fat_g": 6.57,
    "sodium_mg": 87.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705645",
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
