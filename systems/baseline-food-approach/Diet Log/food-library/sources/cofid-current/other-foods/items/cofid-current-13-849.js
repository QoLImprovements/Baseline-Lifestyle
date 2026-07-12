/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Poppy seeds",
  "nutritionPerBasis": {
    "calcium_mg": 1580.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 47.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 11.1,
    "magnesium_mg": 330.0,
    "omega3_g": 0.45,
    "phosphorus_mg": 840.0,
    "potassium_mg": 700.0,
    "protein_g": 20.6,
    "salt_g": 0.0525,
    "sat_fat_g": 6.8,
    "sodium_mg": 21.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.72,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-849",
  "state": "Unspecified",
  "subcategory": "G",
  "tags": [
    "g",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
