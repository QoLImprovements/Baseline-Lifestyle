/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, frozen",
  "id": "cofid-current-16-405",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish fingers, cod, grilled/baked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 22.0,
    "energy_kcal": 223.0,
    "fat_g": 9.2,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 0.57,
    "magnesium_mg": 25.0,
    "omega3_g": 0.42,
    "phosphorus_mg": 142.0,
    "potassium_mg": 254.0,
    "protein_g": 14.3,
    "salt_g": 0.7925,
    "sat_fat_g": 1.19,
    "sodium_mg": 317.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-405",
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
