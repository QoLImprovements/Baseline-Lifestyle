/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from Wharton et al, 1983",
  "id": "cofid-current-15-040",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato, spinach and cauliflower, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 7.1,
    "energy_kcal": 169.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 1.0,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 220.0,
    "protein_g": 2.2,
    "salt_g": 0.0925,
    "sat_fat_g": 9.6,
    "sodium_mg": 37.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 279.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-040",
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
