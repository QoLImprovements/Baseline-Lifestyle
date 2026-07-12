/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving-1-patty",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173298",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "serving-1-patty",
      "kind": "unit",
      "label": "serving 1 patty"
    }
  ],
  "name": "McDONALD'S, Hash Brown",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 28.6,
    "energy_kcal": 271.0,
    "fat_g": 16.3,
    "fibre_g": 2.8,
    "folate_ug": 12.0,
    "iron_mg": 0.56,
    "magnesium_mg": 20.0,
    "omega3_g": 0.412,
    "phosphorus_mg": 99.0,
    "potassium_mg": 341.0,
    "protein_g": 2.48,
    "salt_g": 1.45,
    "sat_fat_g": 2.33,
    "sodium_mg": 580.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173298",
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
