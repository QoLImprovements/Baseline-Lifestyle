/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-344 using edible portion of 0.84",
  "id": "cofid-current-14-345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apples, cooking, baked with sugar, flesh only, weighed with skin",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 14.3,
    "energy_kcal": 57.0,
    "fat_g": 0.3,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 84.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.06,
    "sodium_mg": 1.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-345",
  "state": "Baked",
  "subcategory": "FA",
  "tags": [
    "baked",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
