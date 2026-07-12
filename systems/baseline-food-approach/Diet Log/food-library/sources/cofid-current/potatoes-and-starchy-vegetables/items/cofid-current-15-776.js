/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, canned peas",
  "id": "cofid-current-15-776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, pea and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 10.2,
    "energy_kcal": 147.0,
    "fat_g": 11.0,
    "fibre_g": 2.8,
    "folate_ug": 12.0,
    "iron_mg": 0.99,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 235.0,
    "protein_g": 2.5,
    "salt_g": 0.065,
    "sat_fat_g": 0.8,
    "sodium_mg": 26.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 2.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-776",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
