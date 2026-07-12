/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-869",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Roulade, spinach",
  "nutritionPerBasis": {
    "calcium_mg": 255.0,
    "carbs_g": 4.5,
    "energy_kcal": 182.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 1.34,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 182.0,
    "potassium_mg": 219.0,
    "protein_g": 10.1,
    "salt_g": 0.6725,
    "sat_fat_g": 7.33,
    "sodium_mg": 269.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 458.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-869",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
