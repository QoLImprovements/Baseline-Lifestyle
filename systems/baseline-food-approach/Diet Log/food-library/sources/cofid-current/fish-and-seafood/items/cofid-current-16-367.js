/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 sub-samples, 2 from different establishments in each of 5 regions",
  "id": "cofid-current-16-367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sesame prawn toast, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 16.7,
    "energy_kcal": 382.0,
    "fat_g": 29.8,
    "fibre_g": 3.6,
    "folate_ug": 13.0,
    "iron_mg": 1.76,
    "magnesium_mg": 60.0,
    "omega3_g": 1.87,
    "phosphorus_mg": 180.0,
    "potassium_mg": 143.0,
    "protein_g": 12.9,
    "salt_g": 1.175,
    "sat_fat_g": 3.84,
    "sodium_mg": 470.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-367",
  "state": "Raw",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
