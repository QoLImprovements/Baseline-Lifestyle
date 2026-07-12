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
  "id": "cofid-current-13-394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Water chestnuts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 10.4,
    "energy_kcal": 46.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.7,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 530.0,
    "protein_g": 1.4,
    "salt_g": 0.03,
    "sat_fat_g": 0.0,
    "sodium_mg": 12.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-394",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
