/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. West Indian dish. Recipe from a personal collection",
  "id": "cofid-current-15-714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Casserole, sweet potato and green banana, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 31.2,
    "energy_kcal": 181.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.52,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 285.0,
    "protein_g": 1.2,
    "salt_g": 0.1975,
    "sat_fat_g": 4.09,
    "sodium_mg": 79.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 438.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.76
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-714",
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
