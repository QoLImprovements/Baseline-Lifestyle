/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "5 samples, 2 products, frozen",
  "id": "cofid-current-16-406",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish fingers, salmon, grilled/baked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 20.7,
    "energy_kcal": 247.0,
    "fat_g": 11.2,
    "fibre_g": 2.0,
    "folate_ug": 15.0,
    "iron_mg": 0.75,
    "magnesium_mg": 30.0,
    "omega3_g": 0.93,
    "phosphorus_mg": 194.0,
    "potassium_mg": 300.0,
    "protein_g": 17.2,
    "salt_g": 0.72,
    "sat_fat_g": 1.07,
    "sodium_mg": 288.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.82,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-406",
  "state": "Baked",
  "subcategory": "JR",
  "tags": [
    "baked",
    "fish-and-seafood",
    "jr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
