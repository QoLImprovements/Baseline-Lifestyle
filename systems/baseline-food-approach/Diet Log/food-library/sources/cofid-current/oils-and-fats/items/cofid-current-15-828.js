/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Onion fried in chick pea flour batter",
  "id": "cofid-current-15-828",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, onion, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 24.6,
    "energy_kcal": 270.0,
    "fat_g": 14.7,
    "fibre_g": 5.7,
    "folate_ug": 48.0,
    "iron_mg": 1.55,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 213.0,
    "protein_g": 11.2,
    "salt_g": 0.0375,
    "sat_fat_g": 1.09,
    "sodium_mg": 15.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-828",
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
