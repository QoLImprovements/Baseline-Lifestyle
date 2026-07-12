/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item-3-1-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "item-3-1-oz",
      "kind": "unit",
      "label": "item 3.1 oz"
    }
  ],
  "name": "McDONALD'S, Side Salad",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 4.3,
    "energy_kcal": 85.0,
    "fat_g": 0.19,
    "fibre_g": 1.6,
    "folate_ug": 57.0,
    "iron_mg": 0.65,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 220.0,
    "protein_g": 1.03,
    "salt_g": 0.03,
    "sat_fat_g": 0.02,
    "sodium_mg": 12.0,
    "sugar_g": 2.24,
    "vitamin_a_ug": 2850.0,
    "vitamin_c_mg": 15.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172074",
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
