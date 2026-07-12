/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scones, fruit, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 50.8,
    "energy_kcal": 322.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.58,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 494.0,
    "potassium_mg": 377.0,
    "protein_g": 7.7,
    "salt_g": 1.355,
    "sat_fat_g": 3.65,
    "sodium_mg": 542.0,
    "sugar_g": 13.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1115",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
