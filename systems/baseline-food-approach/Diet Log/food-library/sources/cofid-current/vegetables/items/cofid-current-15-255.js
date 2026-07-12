/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-255",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, tomato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 22.6,
    "energy_kcal": 193.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 1.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 230.0,
    "protein_g": 3.3,
    "salt_g": 0.85,
    "sat_fat_g": 1.5,
    "sodium_mg": 340.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-255",
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
