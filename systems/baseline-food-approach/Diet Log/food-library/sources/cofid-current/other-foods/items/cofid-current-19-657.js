/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands including Cumberland and Lincolnshire sausages. 50-90% meat",
  "id": "cofid-current-19-657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, premium, raw",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 2.6,
    "energy_kcal": 254.0,
    "fat_g": 21.0,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 1.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 190.0,
    "protein_g": 13.8,
    "salt_g": 1.25,
    "sat_fat_g": 8.17,
    "sodium_mg": 500.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-657",
  "state": "Raw",
  "subcategory": "MI",
  "tags": [
    "mi",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
