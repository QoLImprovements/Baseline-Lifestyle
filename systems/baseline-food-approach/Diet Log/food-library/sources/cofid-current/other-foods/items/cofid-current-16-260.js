/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources",
  "id": "cofid-current-16-260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oysters, raw",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 2.7,
    "energy_kcal": 65.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.7,
    "magnesium_mg": 42.0,
    "omega3_g": 0.37,
    "phosphorus_mg": 210.0,
    "potassium_mg": 260.0,
    "protein_g": 10.8,
    "salt_g": 1.275,
    "sat_fat_g": 0.2,
    "sodium_mg": 510.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-260",
  "state": "Raw",
  "subcategory": "JM",
  "tags": [
    "jm",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
