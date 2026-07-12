/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cone",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ice cream cone, soft serve, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 27.8,
    "energy_kcal": 196.0,
    "fat_g": 7.18,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 0.81,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 168.0,
    "protein_g": 5.12,
    "salt_g": 0.195,
    "sat_fat_g": 4.25,
    "sodium_mg": 78.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705651",
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
