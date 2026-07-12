/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "21 samples, seedless, autumn and winter, including Crimson, Flame",
  "id": "cofid-current-14-322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapes, green",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 15.2,
    "energy_kcal": 62.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 6.0,
    "iron_mg": 0.21,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 217.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.07,
    "sodium_mg": 1.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-322",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
