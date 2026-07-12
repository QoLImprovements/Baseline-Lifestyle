/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-hamburger",
  "description": "Burgers",
  "id": "usda-fndds-2706921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hamburger, from fast food, 1 small patty",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 28.3,
    "energy_kcal": 285.0,
    "fat_g": 11.7,
    "fibre_g": 1.0,
    "folate_ug": 62.0,
    "iron_mg": 2.98,
    "magnesium_mg": 21.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 132.0,
    "potassium_mg": 201.0,
    "protein_g": 15.5,
    "salt_g": 0.99,
    "sat_fat_g": 4.3,
    "sodium_mg": 396.0,
    "sugar_g": 4.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706921",
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
