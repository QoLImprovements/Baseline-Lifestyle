/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, mixture of UK and imported",
  "id": "cofid-current-14-375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raspberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.1,
    "energy_kcal": 25.0,
    "fat_g": 0.3,
    "fibre_g": 3.7,
    "folate_ug": 55.0,
    "iron_mg": 0.41,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 164.0,
    "protein_g": 0.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.1,
    "sodium_mg": 0.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 19.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-375",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
