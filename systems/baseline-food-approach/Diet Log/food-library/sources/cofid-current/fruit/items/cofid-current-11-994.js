/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Apple, gooseberry, plum, rhubarb recipe.",
  "id": "cofid-current-11-994",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, fruit, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 32.7,
    "energy_kcal": 198.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.63,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 200.0,
    "protein_g": 2.5,
    "salt_g": 0.1575,
    "sat_fat_g": 4.37,
    "sodium_mg": 63.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-994",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
