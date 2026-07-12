/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands",
  "id": "cofid-current-11-988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Croissants",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 43.3,
    "energy_kcal": 373.0,
    "fat_g": 19.7,
    "fibre_g": 3.1,
    "folate_ug": 47.0,
    "iron_mg": 1.1,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 126.0,
    "protein_g": 8.3,
    "salt_g": 0.825,
    "sat_fat_g": 9.76,
    "sodium_mg": 330.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-988",
  "state": "Unspecified",
  "subcategory": "AG",
  "tags": [
    "ag",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
