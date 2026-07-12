/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples from UK and Spain, ends trimmed",
  "id": "cofid-current-13-627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Courgette, raw",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 2.3,
    "energy_kcal": 16.0,
    "fat_g": 0.2,
    "fibre_g": 0.5,
    "folate_ug": 34.0,
    "iron_mg": 0.42,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 341.0,
    "protein_g": 1.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.05,
    "sodium_mg": 0.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 3.3
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-627",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
