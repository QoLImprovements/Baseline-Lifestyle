/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706939",
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
  "name": "Double hamburger, on wheat bun, 2 medium patties",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 11.8,
    "energy_kcal": 286.0,
    "fat_g": 17.1,
    "fibre_g": 1.4,
    "folate_ug": 34.0,
    "iron_mg": 2.6,
    "magnesium_mg": 29.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 171.0,
    "potassium_mg": 274.0,
    "protein_g": 19.9,
    "salt_g": 0.805,
    "sat_fat_g": 6.67,
    "sodium_mg": 322.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706939",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
