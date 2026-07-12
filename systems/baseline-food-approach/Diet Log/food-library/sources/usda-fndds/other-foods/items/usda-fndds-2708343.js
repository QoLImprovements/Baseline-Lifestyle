/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708343",
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
      "gramsPerUnit": 28.0,
      "key": "1-pancake",
      "kind": "unit",
      "label": "1 pancake"
    }
  ],
  "name": "Chinese pancake",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 45.4,
    "energy_kcal": 207.0,
    "fat_g": 0.38,
    "fibre_g": 0.7,
    "folate_ug": 92.0,
    "iron_mg": 2.32,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 62.0,
    "protein_g": 4.05,
    "salt_g": 0.0125,
    "sat_fat_g": 0.102,
    "sodium_mg": 5.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708343",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "other-foods",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
