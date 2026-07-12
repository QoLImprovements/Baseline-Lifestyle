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
  "id": "cofid-current-17-776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, carrot and orange, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 3.8,
    "energy_kcal": 20.0,
    "fat_g": 0.5,
    "fibre_g": 1.7,
    "folate_ug": 2.0,
    "iron_mg": 0.14,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 82.0,
    "protein_g": 0.3,
    "salt_g": 0.0275,
    "sat_fat_g": 0.22,
    "sodium_mg": 11.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 749.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 2.09
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-776",
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
