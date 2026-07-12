/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item-6-3-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 179.0,
      "key": "item-6-3-oz",
      "kind": "unit",
      "label": "item (6.3 oz)"
    }
  ],
  "name": "McDONALD'S, Hot Fudge Sundae",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 30.0,
    "energy_kcal": 186.0,
    "fat_g": 5.91,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 0.83,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 246.0,
    "protein_g": 4.14,
    "salt_g": 0.235,
    "sat_fat_g": 3.59,
    "sodium_mg": 94.0,
    "sugar_g": 26.9,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173302",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
