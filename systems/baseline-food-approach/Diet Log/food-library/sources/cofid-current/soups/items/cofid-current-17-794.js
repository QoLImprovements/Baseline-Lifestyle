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
  "id": "cofid-current-17-794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, French onion, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 5.0,
    "energy_kcal": 41.0,
    "fat_g": 2.2,
    "fibre_g": 1.3,
    "folate_ug": 5.0,
    "iron_mg": 0.21,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 90.0,
    "protein_g": 0.9,
    "salt_g": 0.5775,
    "sat_fat_g": 0.19,
    "sodium_mg": 231.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-794",
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
