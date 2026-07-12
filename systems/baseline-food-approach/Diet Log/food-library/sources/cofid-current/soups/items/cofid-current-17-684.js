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
  "id": "cofid-current-17-684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 3.7,
    "energy_kcal": 55.0,
    "fat_g": 4.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.33,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 120.0,
    "protein_g": 1.0,
    "salt_g": 0.7875,
    "sat_fat_g": 2.41,
    "sodium_mg": 315.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 245.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-684",
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
