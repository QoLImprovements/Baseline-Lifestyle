/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Frozen and chilled. Calculated from raw 16-381 using 22.8% weight loss",
  "id": "cofid-current-16-434",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plaice, flesh only, baked",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 99.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.13,
    "magnesium_mg": 27.0,
    "omega3_g": 0.29,
    "phosphorus_mg": 203.0,
    "potassium_mg": 293.0,
    "protein_g": 21.3,
    "salt_g": 0.4775,
    "sat_fat_g": 0.28,
    "sodium_mg": 191.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-434",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
