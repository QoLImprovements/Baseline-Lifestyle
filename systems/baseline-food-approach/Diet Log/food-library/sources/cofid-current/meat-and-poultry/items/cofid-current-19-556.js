/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, with bun, grilled, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 10.3,
    "energy_kcal": 283.0,
    "fat_g": 17.4,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 1.99,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 301.0,
    "protein_g": 21.9,
    "salt_g": 0.495,
    "sat_fat_g": 7.11,
    "sodium_mg": 198.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-556",
  "state": "Grilled",
  "subcategory": "MR",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "mr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
