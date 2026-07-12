/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe from manufacturer",
  "id": "cofid-current-15-210",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut cutlets, retail, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 18.7,
    "energy_kcal": 289.0,
    "fat_g": 22.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.3,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 190.0,
    "protein_g": 4.8,
    "salt_g": 0.525,
    "sat_fat_g": 2.5,
    "sodium_mg": 210.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 7.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-210",
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
