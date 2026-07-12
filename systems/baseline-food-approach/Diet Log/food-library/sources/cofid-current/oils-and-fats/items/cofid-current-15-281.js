/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-281",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rissoles, brown rice, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 30.8,
    "energy_kcal": 216.0,
    "fat_g": 8.8,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.7,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 170.0,
    "protein_g": 5.6,
    "salt_g": 0.875,
    "sat_fat_g": 1.3,
    "sodium_mg": 350.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-281",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
