/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 15-327 using 15% weight loss and measured fat uptake",
  "id": "cofid-old-15-328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegebanger mix, made up with water and egg, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 12.2,
    "energy_kcal": 281.0,
    "fat_g": 18.2,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 3.5,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 440.0,
    "protein_g": 18.1,
    "salt_g": 1.45,
    "sat_fat_g": 4.4,
    "sodium_mg": 580.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-328",
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
