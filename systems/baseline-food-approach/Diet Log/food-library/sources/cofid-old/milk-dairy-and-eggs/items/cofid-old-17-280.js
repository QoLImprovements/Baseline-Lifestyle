/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Diluted with an equal volume of water",
  "id": "cofid-old-17-280",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, tomato, cream of, canned, condensed, as served",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.3,
    "energy_kcal": 62.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.3,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 180.0,
    "protein_g": 0.9,
    "salt_g": 1.025,
    "sat_fat_g": 0.5,
    "sodium_mg": 410.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-280",
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
