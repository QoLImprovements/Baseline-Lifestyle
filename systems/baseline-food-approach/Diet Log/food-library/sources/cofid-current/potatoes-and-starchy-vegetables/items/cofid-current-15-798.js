/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, cheese, onion and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 340.0,
    "carbs_g": 18.0,
    "energy_kcal": 355.0,
    "fat_g": 26.2,
    "fibre_g": 1.8,
    "folate_ug": 19.0,
    "iron_mg": 0.57,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 237.0,
    "potassium_mg": 152.0,
    "protein_g": 13.0,
    "salt_g": 0.9675,
    "sat_fat_g": 13.33,
    "sodium_mg": 387.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-798",
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
