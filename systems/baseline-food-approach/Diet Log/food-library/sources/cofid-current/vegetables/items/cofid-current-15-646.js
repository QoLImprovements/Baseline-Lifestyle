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
  "id": "cofid-current-15-646",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasty, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 30.0,
    "energy_kcal": 301.0,
    "fat_g": 19.1,
    "fibre_g": 2.8,
    "folate_ug": 13.0,
    "iron_mg": 0.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 169.0,
    "protein_g": 4.2,
    "salt_g": 0.345,
    "sat_fat_g": 7.08,
    "sodium_mg": 138.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 2.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-646",
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
