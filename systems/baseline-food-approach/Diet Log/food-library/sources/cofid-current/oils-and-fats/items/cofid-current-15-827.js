/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Cauliflour fried in chick pea flour batter",
  "id": "cofid-current-15-827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, cauliflower, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 18.2,
    "energy_kcal": 320.0,
    "fat_g": 23.9,
    "fibre_g": 4.7,
    "folate_ug": 48.0,
    "iron_mg": 1.24,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 277.0,
    "protein_g": 9.2,
    "salt_g": 0.055,
    "sat_fat_g": 1.71,
    "sodium_mg": 22.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 5.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-827",
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
