/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Potatoes fried in chick pea flour batter",
  "id": "cofid-current-15-831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, potato, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 28.4,
    "energy_kcal": 315.0,
    "fat_g": 19.6,
    "fibre_g": 5.0,
    "folate_ug": 37.0,
    "iron_mg": 1.24,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 404.0,
    "protein_g": 9.2,
    "salt_g": 0.06,
    "sat_fat_g": 1.41,
    "sodium_mg": 24.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 4.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-831",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
