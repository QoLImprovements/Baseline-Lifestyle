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
  "id": "usda-fndds-2706942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-double-hamburger",
      "kind": "unit",
      "label": "1 double hamburger"
    }
  ],
  "name": "Double hamburger, from fast food, 2 small patties",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 19.7,
    "energy_kcal": 288.0,
    "fat_g": 14.7,
    "fibre_g": 0.7,
    "folate_ug": 50.0,
    "iron_mg": 2.81,
    "magnesium_mg": 21.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 145.0,
    "potassium_mg": 232.0,
    "protein_g": 17.8,
    "salt_g": 0.8925,
    "sat_fat_g": 5.65,
    "sodium_mg": 357.0,
    "sugar_g": 2.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706942",
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
