/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, UK and imported",
  "id": "cofid-current-13-669-variant-2",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Watercress, raw",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 0.0,
    "energy_kcal": 10.0,
    "fat_g": 0.3,
    "fibre_g": 1.5,
    "folate_ug": 43.0,
    "iron_mg": 0.72,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 300.0,
    "protein_g": 1.9,
    "salt_g": 0.0925,
    "sat_fat_g": 0.09,
    "sodium_mg": 37.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 265.0,
    "vitamin_c_mg": 62.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 315.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-669",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
