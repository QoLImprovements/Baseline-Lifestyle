/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "8 assorted frozen samples; stir fried 4-7 minutes",
  "id": "cofid-current-15-345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetable stir fry mix, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 6.4,
    "energy_kcal": 64.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.5,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 230.0,
    "protein_g": 2.0,
    "salt_g": 0.0275,
    "sat_fat_g": 0.4,
    "sodium_mg": 11.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-345",
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
