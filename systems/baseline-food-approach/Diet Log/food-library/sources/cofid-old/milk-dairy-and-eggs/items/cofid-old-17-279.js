/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "7 cans, 2 brands",
  "id": "cofid-old-17-279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, tomato, cream of, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 14.6,
    "energy_kcal": 123.0,
    "fat_g": 6.8,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 360.0,
    "protein_g": 1.7,
    "salt_g": 2.075,
    "sat_fat_g": 1.0,
    "sodium_mg": 830.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-279",
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
