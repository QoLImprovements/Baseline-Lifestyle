/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands",
  "id": "cofid-current-13-562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, marrowfat, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 13.8,
    "energy_kcal": 87.0,
    "fat_g": 0.8,
    "fibre_g": 5.0,
    "folate_ug": 11.0,
    "iron_mg": 1.5,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 160.0,
    "protein_g": 6.9,
    "salt_g": 0.4,
    "sat_fat_g": 0.1,
    "sodium_mg": 160.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-562",
  "state": "Canned",
  "subcategory": "DF",
  "tags": [
    "canned",
    "df",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
