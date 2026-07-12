/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "7 cans, 3 brands; tomato, vegetable and minestrone varieties",
  "id": "cofid-current-17-699",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, low calorie, canned",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.2,
    "energy_kcal": 33.0,
    "fat_g": 0.7,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 130.0,
    "protein_g": 0.9,
    "salt_g": 0.425,
    "sat_fat_g": 0.2,
    "sodium_mg": 170.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-699",
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
