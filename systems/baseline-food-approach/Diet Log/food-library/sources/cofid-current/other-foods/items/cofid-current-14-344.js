/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 672g apple (14-342) and 40g sugar (17-061)",
  "id": "cofid-current-14-344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apples, cooking, baked with sugar, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 17.1,
    "energy_kcal": 69.0,
    "fat_g": 0.4,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 100.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.07,
    "sodium_mg": 1.0,
    "sugar_g": 17.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-344",
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
