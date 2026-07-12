/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Ends trimmed",
  "id": "cofid-current-13-334",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salsify, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 10.2,
    "energy_kcal": 27.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 57.0,
    "iron_mg": 0.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 310.0,
    "protein_g": 1.3,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-334",
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
