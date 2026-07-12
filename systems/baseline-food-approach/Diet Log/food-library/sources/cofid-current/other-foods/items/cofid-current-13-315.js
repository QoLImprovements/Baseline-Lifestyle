/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "3 samples",
  "id": "cofid-current-13-315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Patra leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 2.6,
    "energy_kcal": 39.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 1.5,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 680.0,
    "protein_g": 4.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.3,
    "sodium_mg": 1.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 1065.0,
    "vitamin_c_mg": 140.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-315",
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
