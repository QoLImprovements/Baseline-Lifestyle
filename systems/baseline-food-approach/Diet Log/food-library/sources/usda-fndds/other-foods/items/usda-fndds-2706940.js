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
  "id": "usda-fndds-2706940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "1-double-hamburger",
      "kind": "unit",
      "label": "1 double hamburger"
    }
  ],
  "name": "Double hamburger, on white bun, 2 large patties",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 10.3,
    "energy_kcal": 290.0,
    "fat_g": 18.0,
    "fibre_g": 0.4,
    "folate_ug": 36.0,
    "iron_mg": 2.62,
    "magnesium_mg": 20.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 158.0,
    "potassium_mg": 266.0,
    "protein_g": 20.2,
    "salt_g": 0.805,
    "sat_fat_g": 7.13,
    "sodium_mg": 322.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706940",
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
