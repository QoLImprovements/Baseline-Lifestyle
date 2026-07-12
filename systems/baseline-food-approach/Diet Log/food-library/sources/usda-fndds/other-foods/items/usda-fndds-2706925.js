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
  "id": "usda-fndds-2706925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    }
  ],
  "name": "Hamburger, from school cafeteria",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 25.7,
    "energy_kcal": 243.0,
    "fat_g": 7.36,
    "fibre_g": 3.0,
    "folate_ug": 44.0,
    "iron_mg": 2.96,
    "magnesium_mg": 42.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 182.0,
    "potassium_mg": 251.0,
    "protein_g": 17.8,
    "salt_g": 0.695,
    "sat_fat_g": 2.42,
    "sodium_mg": 278.0,
    "sugar_g": 2.94,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706925",
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
