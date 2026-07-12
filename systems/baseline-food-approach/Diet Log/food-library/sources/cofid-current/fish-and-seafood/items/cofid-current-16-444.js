/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from grilled/baked 16-405 using analysed water and fat values",
  "id": "cofid-current-16-444",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish fingers, cod, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 19.9,
    "energy_kcal": 240.0,
    "fat_g": 12.6,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.52,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 230.0,
    "protein_g": 13.0,
    "salt_g": 0.7175,
    "sat_fat_g": 1.41,
    "sodium_mg": 287.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-444",
  "state": "Fried",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "fried",
    "jr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
