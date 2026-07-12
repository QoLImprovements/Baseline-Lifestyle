/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, vegetables fried in chick pea flour batter",
  "id": "cofid-current-15-830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, potato, carrot and pea, fried in vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 28.9,
    "energy_kcal": 355.0,
    "fat_g": 22.7,
    "fibre_g": 6.1,
    "folate_ug": 53.0,
    "iron_mg": 1.64,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 240.0,
    "protein_g": 12.5,
    "salt_g": 0.0425,
    "sat_fat_g": 1.67,
    "sodium_mg": 17.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 141.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 5.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-830",
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
