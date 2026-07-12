/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "10 cans, 3 brands",
  "id": "cofid-current-17-713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, mushroom, cream of, canned",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 3.9,
    "energy_kcal": 46.0,
    "fat_g": 3.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 55.0,
    "protein_g": 1.1,
    "salt_g": 0.575,
    "sat_fat_g": 0.5,
    "sodium_mg": 230.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-713",
  "state": "Canned",
  "subcategory": "WAC",
  "tags": [
    "canned",
    "fungi",
    "wac"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
