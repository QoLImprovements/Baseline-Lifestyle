/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 5 products, vegetable oil/dairy blend, including I Can't Believe It's Not Butter Light and own brands",
  "id": "cofid-current-12-497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread, low fat (26-39%), not polyunsaturated, including dairy type",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.7,
    "energy_kcal": 354.0,
    "fat_g": 39.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.02,
    "magnesium_mg": 2.0,
    "omega3_g": 1.61,
    "phosphorus_mg": 9.0,
    "potassium_mg": 61.0,
    "protein_g": 0.2,
    "salt_g": 1.73,
    "sat_fat_g": 9.76,
    "sodium_mg": 692.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 893.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 12.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-497",
  "state": "Unspecified",
  "subcategory": "OA",
  "tags": [
    "oa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
