/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item-6-4-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "item-6-4-oz",
      "kind": "unit",
      "label": "item (6.4 oz)"
    }
  ],
  "name": "McDONALD'S, Hot Caramel Sundae",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 33.4,
    "energy_kcal": 787.0,
    "fat_g": 4.89,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.08,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 186.0,
    "protein_g": 3.58,
    "salt_g": 0.2,
    "sat_fat_g": 2.47,
    "sodium_mg": 80.0,
    "sugar_g": 23.5,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173301",
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
