/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 cans, 3 brands",
  "id": "cofid-current-17-712",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, vegetable, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 7.4,
    "energy_kcal": 39.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 110.0,
    "protein_g": 1.4,
    "salt_g": 0.575,
    "sat_fat_g": 0.0,
    "sodium_mg": 230.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-712",
  "state": "Canned",
  "subcategory": "WAC",
  "tags": [
    "canned",
    "soups",
    "wac"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
