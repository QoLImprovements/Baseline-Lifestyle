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
  "id": "cofid-current-17-813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, mulligatawny, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 8.1,
    "energy_kcal": 90.0,
    "fat_g": 6.4,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.89,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 103.0,
    "protein_g": 1.9,
    "salt_g": 1.16,
    "sat_fat_g": 3.68,
    "sodium_mg": 464.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 272.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-813",
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
