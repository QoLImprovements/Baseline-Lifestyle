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
  "id": "usda-fndds-2710083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
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
  "name": "Horseradish",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 11.3,
    "energy_kcal": 48.0,
    "fat_g": 0.69,
    "fibre_g": 3.3,
    "folate_ug": 57.0,
    "iron_mg": 0.42,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 246.0,
    "protein_g": 1.18,
    "salt_g": 1.05,
    "sat_fat_g": 0.09,
    "sodium_mg": 420.0,
    "sugar_g": 7.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 24.9,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710083",
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
