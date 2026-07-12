/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Bramley apples and unspecified. Analytical data, 1985-86; and 2011-12",
  "id": "cofid-current-14-362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apples, cooking, raw, flesh only, peeled",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 8.9,
    "energy_kcal": 37.0,
    "fat_g": 0.3,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 0.1,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 88.0,
    "protein_g": 0.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.06,
    "sodium_mg": 2.0,
    "sugar_g": 8.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-362",
  "state": "Raw",
  "subcategory": "F",
  "tags": [
    "f",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
