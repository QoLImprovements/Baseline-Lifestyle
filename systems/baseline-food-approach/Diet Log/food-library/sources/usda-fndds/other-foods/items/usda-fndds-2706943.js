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
  "id": "usda-fndds-2706943",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-double-hamburger",
      "kind": "unit",
      "label": "1 double hamburger"
    }
  ],
  "name": "Double hamburger, from fast food, 2 medium patties",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 13.0,
    "energy_kcal": 290.0,
    "fat_g": 17.1,
    "fibre_g": 0.5,
    "folate_ug": 40.0,
    "iron_mg": 2.67,
    "magnesium_mg": 20.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 154.0,
    "potassium_mg": 256.0,
    "protein_g": 19.5,
    "salt_g": 0.84,
    "sat_fat_g": 6.7,
    "sodium_mg": 336.0,
    "sugar_g": 1.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706943",
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
