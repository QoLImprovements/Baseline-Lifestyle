/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-miniature-hamburger",
  "description": "Burgers",
  "id": "usda-fndds-2706919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature-hamburger",
      "kind": "unit",
      "label": "1 miniature hamburger"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hamburger slider, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 29.2,
    "energy_kcal": 285.0,
    "fat_g": 11.4,
    "fibre_g": 1.0,
    "folate_ug": 63.0,
    "iron_mg": 3.0,
    "magnesium_mg": 21.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 131.0,
    "potassium_mg": 198.0,
    "protein_g": 15.3,
    "salt_g": 1.0,
    "sat_fat_g": 4.15,
    "sodium_mg": 400.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706919",
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
