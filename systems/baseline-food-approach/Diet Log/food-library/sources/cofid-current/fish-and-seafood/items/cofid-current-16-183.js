/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "6 samples, loose rollmops and in jars",
  "id": "cofid-current-16-183",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Herring, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 10.0,
    "energy_kcal": 209.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.7,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 62.0,
    "protein_g": 16.7,
    "salt_g": 2.075,
    "sat_fat_g": 0.0,
    "sodium_mg": 830.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-183",
  "state": "Unspecified",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
