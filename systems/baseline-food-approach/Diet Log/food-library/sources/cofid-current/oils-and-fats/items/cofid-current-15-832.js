/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe, spinach fried in chick pea flour batter",
  "id": "cofid-current-15-832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, spinach, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 30.0,
    "energy_kcal": 360.0,
    "fat_g": 22.2,
    "fibre_g": 0.0,
    "folate_ug": 74.0,
    "iron_mg": 2.44,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 149.0,
    "potassium_mg": 355.0,
    "protein_g": 14.6,
    "salt_g": 0.2275,
    "sat_fat_g": 1.65,
    "sodium_mg": 91.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 220.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 6.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-832",
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
