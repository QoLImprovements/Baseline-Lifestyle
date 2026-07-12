/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands",
  "id": "cofid-current-13-309",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Onions, pickled, drained",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 4.9,
    "energy_kcal": 24.0,
    "fat_g": 0.2,
    "fibre_g": 1.6,
    "folate_ug": 14.0,
    "iron_mg": 0.2,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 93.0,
    "protein_g": 0.9,
    "salt_g": 1.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 450.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-309",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
