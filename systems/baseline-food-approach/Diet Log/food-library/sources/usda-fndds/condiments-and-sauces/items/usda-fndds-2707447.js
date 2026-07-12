/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2707447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Worcestershire sauce",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 19.2,
    "energy_kcal": 77.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 5.3,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 800.0,
    "protein_g": 0.0,
    "salt_g": 3.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 1300.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707447",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
