/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 2 brands; block of dried kernel",
  "id": "cofid-old-14-872",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coconut, creamed block",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 7.0,
    "energy_kcal": 669.0,
    "fat_g": 68.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 3.7,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 650.0,
    "protein_g": 6.0,
    "salt_g": 0.075,
    "sat_fat_g": 59.3,
    "sodium_mg": 30.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-872",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
