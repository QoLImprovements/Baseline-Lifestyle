/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, branded and own brand",
  "id": "cofid-current-11-849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Doughnuts, with jam",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 48.4,
    "energy_kcal": 321.0,
    "fat_g": 13.1,
    "fibre_g": 1.7,
    "folate_ug": 21.0,
    "iron_mg": 1.15,
    "magnesium_mg": 15.0,
    "omega3_g": 0.22,
    "phosphorus_mg": 135.0,
    "potassium_mg": 121.0,
    "protein_g": 5.4,
    "salt_g": 1.01,
    "sat_fat_g": 4.96,
    "sodium_mg": 404.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-849",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
