/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chia seeds",
  "nutritionPerBasis": {
    "calcium_mg": 631.0,
    "carbs_g": 42.1,
    "energy_kcal": 486.0,
    "fat_g": 30.7,
    "fibre_g": 34.4,
    "folate_ug": 49.0,
    "iron_mg": 7.72,
    "magnesium_mg": 335.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 860.0,
    "potassium_mg": 407.0,
    "protein_g": 16.5,
    "salt_g": 0.04,
    "sat_fat_g": 3.33,
    "sodium_mg": 16.0,
    "sugar_g": 1.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707590",
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
