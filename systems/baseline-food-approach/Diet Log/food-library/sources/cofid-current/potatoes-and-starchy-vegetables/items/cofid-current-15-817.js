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
  "id": "cofid-current-15-817",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentil and potato pie, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 18.6,
    "energy_kcal": 111.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 1.77,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 302.0,
    "protein_g": 5.3,
    "salt_g": 0.78,
    "sat_fat_g": 0.4,
    "sodium_mg": 312.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-817",
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
