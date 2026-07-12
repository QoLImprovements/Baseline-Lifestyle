/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "7 varieties from different Chinese shops",
  "id": "cofid-current-16-279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish balls, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 5.5,
    "energy_kcal": 74.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 110.0,
    "protein_g": 11.8,
    "salt_g": 1.875,
    "sat_fat_g": 0.0,
    "sodium_mg": 750.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-279",
  "state": "Steamed",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
