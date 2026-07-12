/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-double-hamburger",
  "description": "Burgers",
  "id": "usda-fndds-2706941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "1-double-hamburger",
      "kind": "unit",
      "label": "1 double hamburger"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Double hamburger, on wheat bun, 2 large patties",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 9.36,
    "energy_kcal": 287.0,
    "fat_g": 18.1,
    "fibre_g": 1.1,
    "folate_ug": 31.0,
    "iron_mg": 2.56,
    "magnesium_mg": 27.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 172.0,
    "potassium_mg": 280.0,
    "protein_g": 20.6,
    "salt_g": 0.7775,
    "sat_fat_g": 7.1,
    "sodium_mg": 311.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706941",
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
