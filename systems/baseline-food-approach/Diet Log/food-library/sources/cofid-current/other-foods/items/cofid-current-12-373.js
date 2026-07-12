/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, takeaway and retail",
  "id": "cofid-current-12-373",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lassi, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 12.3,
    "energy_kcal": 65.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 74.0,
    "potassium_mg": 109.0,
    "protein_g": 2.6,
    "salt_g": 0.1125,
    "sat_fat_g": 0.59,
    "sodium_mg": 45.0,
    "sugar_g": 11.9,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-373",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
