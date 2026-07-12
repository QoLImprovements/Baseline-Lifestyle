/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, goulash, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.2,
    "energy_kcal": 106.0,
    "fat_g": 5.8,
    "fibre_g": 1.2,
    "folate_ug": 10.0,
    "iron_mg": 0.99,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 317.0,
    "protein_g": 7.7,
    "salt_g": 1.3625,
    "sat_fat_g": 1.1,
    "sodium_mg": 545.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-796",
  "state": "Unspecified",
  "subcategory": "WAA",
  "tags": [
    "soups",
    "unspecified",
    "waa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
