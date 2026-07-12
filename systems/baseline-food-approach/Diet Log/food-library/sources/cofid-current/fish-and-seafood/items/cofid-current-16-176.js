/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Samples gutted, grilled for 7 minutes per side",
  "id": "cofid-current-16-176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Herring, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 0.0,
    "energy_kcal": 181.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.6,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 430.0,
    "protein_g": 20.1,
    "salt_g": 0.4,
    "sat_fat_g": 2.8,
    "sodium_mg": 160.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-176",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
