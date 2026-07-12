/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analyses and calculation from 19-093, chilled",
  "id": "cofid-current-19-513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, premium, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 2.3,
    "energy_kcal": 275.0,
    "fat_g": 21.1,
    "fibre_g": 0.6,
    "folate_ug": 8.0,
    "iron_mg": 1.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 220.0,
    "protein_g": 19.0,
    "salt_g": 1.425,
    "sat_fat_g": 8.03,
    "sodium_mg": 570.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-513",
  "state": "Grilled",
  "subcategory": "MI",
  "tags": [
    "grilled",
    "mi",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
