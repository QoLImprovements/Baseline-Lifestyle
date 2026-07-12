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
  "id": "usda-fndds-2706936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-double-hamburger",
      "kind": "unit",
      "label": "1 double hamburger"
    }
  ],
  "name": "Double hamburger, on white bun, 2 small patties",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 14.3,
    "energy_kcal": 289.0,
    "fat_g": 16.6,
    "fibre_g": 0.5,
    "folate_ug": 42.0,
    "iron_mg": 2.7,
    "magnesium_mg": 20.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 153.0,
    "potassium_mg": 252.0,
    "protein_g": 19.2,
    "salt_g": 0.86,
    "sat_fat_g": 6.5,
    "sodium_mg": 344.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706936",
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
