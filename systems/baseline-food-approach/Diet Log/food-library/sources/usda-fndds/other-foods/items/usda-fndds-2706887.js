/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Cheeseburger slider, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 228.0,
    "carbs_g": 25.0,
    "energy_kcal": 298.0,
    "fat_g": 14.3,
    "fibre_g": 0.9,
    "folate_ug": 55.0,
    "iron_mg": 2.56,
    "magnesium_mg": 23.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 208.0,
    "potassium_mg": 190.0,
    "protein_g": 16.2,
    "salt_g": 1.2625,
    "sat_fat_g": 6.25,
    "sodium_mg": 505.0,
    "sugar_g": 3.99,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706887",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
