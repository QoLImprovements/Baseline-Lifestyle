/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-831",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, potato and leek, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 6.2,
    "energy_kcal": 56.0,
    "fat_g": 2.2,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.34,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 180.0,
    "protein_g": 1.5,
    "salt_g": 0.1175,
    "sat_fat_g": 1.32,
    "sodium_mg": 47.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-831",
  "state": "Unspecified",
  "subcategory": "WAA",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "waa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
