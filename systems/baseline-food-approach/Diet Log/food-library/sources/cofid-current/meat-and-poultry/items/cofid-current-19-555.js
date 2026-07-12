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
  "id": "cofid-current-19-555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, grilled, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 1.1,
    "energy_kcal": 288.0,
    "fat_g": 20.3,
    "fibre_g": 0.3,
    "folate_ug": 20.0,
    "iron_mg": 1.92,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 215.0,
    "potassium_mg": 346.0,
    "protein_g": 25.0,
    "salt_g": 0.285,
    "sat_fat_g": 8.54,
    "sodium_mg": 114.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-555",
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
