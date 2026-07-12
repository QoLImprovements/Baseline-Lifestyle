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
  "id": "usda-fndds-2705675",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Light ice cream cone, vanilla, prepackaged",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 34.2,
    "energy_kcal": 223.0,
    "fat_g": 7.3,
    "fibre_g": 0.7,
    "folate_ug": 24.0,
    "iron_mg": 0.8,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 99.0,
    "potassium_mg": 212.0,
    "protein_g": 5.41,
    "salt_g": 0.3325,
    "sat_fat_g": 3.29,
    "sodium_mg": 133.0,
    "sugar_g": 16.4,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705675",
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
