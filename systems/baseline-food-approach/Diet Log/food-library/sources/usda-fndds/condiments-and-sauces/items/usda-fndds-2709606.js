/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709606",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mustard greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 4.67,
    "energy_kcal": 27.0,
    "fat_g": 0.42,
    "fibre_g": 3.2,
    "folate_ug": 12.0,
    "iron_mg": 1.64,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 384.0,
    "protein_g": 2.86,
    "salt_g": 0.05,
    "sat_fat_g": 0.01,
    "sodium_mg": 20.0,
    "sugar_g": 1.32,
    "vitamin_a_ug": 151.0,
    "vitamin_c_mg": 70.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 258.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709606",
  "state": "Raw",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "condiments-and-sauces",
    "other-dark-green-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
