/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "4 samples, 3 products",
  "id": "cofid-current-11-907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wheatgerm",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 44.7,
    "energy_kcal": 352.0,
    "fat_g": 8.4,
    "fibre_g": 13.9,
    "folate_ug": 277.0,
    "iron_mg": 8.08,
    "magnesium_mg": 240.0,
    "omega3_g": 0.51,
    "phosphorus_mg": 1047.0,
    "potassium_mg": 1045.0,
    "protein_g": 27.3,
    "salt_g": 0.0075,
    "sat_fat_g": 1.13,
    "sodium_mg": 3.0,
    "sugar_g": 16.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 16.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-907",
  "state": "Unspecified",
  "subcategory": "AA",
  "tags": [
    "aa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
