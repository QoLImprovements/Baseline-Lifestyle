/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-16-461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pilau, prawn, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 24.8,
    "energy_kcal": 149.0,
    "fat_g": 3.2,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.85,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 76.0,
    "protein_g": 5.2,
    "salt_g": 0.15,
    "sat_fat_g": 1.86,
    "sodium_mg": 60.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-461",
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
