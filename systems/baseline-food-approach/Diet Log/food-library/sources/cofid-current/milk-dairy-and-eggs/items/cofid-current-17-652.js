/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-current-17-652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, cream of tomato, canned",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.8,
    "energy_kcal": 51.0,
    "fat_g": 2.0,
    "fibre_g": 0.6,
    "folate_ug": 14.0,
    "iron_mg": 0.23,
    "magnesium_mg": 8.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 19.0,
    "potassium_mg": 179.0,
    "protein_g": 0.9,
    "salt_g": 0.6125,
    "sat_fat_g": 0.27,
    "sodium_mg": 245.0,
    "sugar_g": 5.5,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-652",
  "state": "Canned",
  "subcategory": "WAC",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "wac"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
