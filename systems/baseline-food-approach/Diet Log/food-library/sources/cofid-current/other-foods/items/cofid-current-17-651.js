/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 3 products",
  "id": "cofid-current-17-651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Maltesers and similar products",
  "nutritionPerBasis": {
    "calcium_mg": 266.0,
    "carbs_g": 63.0,
    "energy_kcal": 476.0,
    "fat_g": 23.3,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 2.02,
    "magnesium_mg": 50.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 269.0,
    "potassium_mg": 565.0,
    "protein_g": 7.6,
    "salt_g": 0.39,
    "sat_fat_g": 14.16,
    "sodium_mg": 156.0,
    "sugar_g": 55.5,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-651",
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
