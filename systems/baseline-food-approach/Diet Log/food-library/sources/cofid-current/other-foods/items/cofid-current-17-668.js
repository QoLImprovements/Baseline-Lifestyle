/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "16 samples, 3 brands, including standard, snack and fun size",
  "id": "cofid-current-17-668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mars bar and own brand equivalents",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 66.6,
    "energy_kcal": 404.0,
    "fat_g": 15.3,
    "fibre_g": 1.5,
    "folate_ug": 5.0,
    "iron_mg": 1.66,
    "magnesium_mg": 35.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 125.0,
    "potassium_mg": 269.0,
    "protein_g": 4.1,
    "salt_g": 0.435,
    "sat_fat_g": 7.31,
    "sodium_mg": 174.0,
    "sugar_g": 63.3,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 4.8
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-668",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "other-foods",
    "sea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
