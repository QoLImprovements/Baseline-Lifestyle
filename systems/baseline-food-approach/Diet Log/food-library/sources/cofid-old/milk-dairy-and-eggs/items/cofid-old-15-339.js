/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 15-337 using 12% weight loss and measured fat uptake",
  "id": "cofid-old-15-339",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegeburger mix, made up with water and egg, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 13.0,
    "energy_kcal": 218.0,
    "fat_g": 12.9,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 3.6,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 400.0,
    "protein_g": 13.4,
    "salt_g": 1.05,
    "sat_fat_g": 2.8,
    "sodium_mg": 420.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-339",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
