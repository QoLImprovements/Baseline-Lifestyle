/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    }
  ],
  "name": "Pine nuts",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.1,
    "energy_kcal": 673.0,
    "fat_g": 68.4,
    "fibre_g": 3.7,
    "folate_ug": 34.0,
    "iron_mg": 5.53,
    "magnesium_mg": 251.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 575.0,
    "potassium_mg": 597.0,
    "protein_g": 13.7,
    "salt_g": 0.005,
    "sat_fat_g": 4.9,
    "sodium_mg": 2.0,
    "sugar_g": 3.59,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 9.33,
    "vitamin_k_ug": 53.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707526",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
