/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, lentil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 14.6,
    "energy_kcal": 121.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.93,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 278.0,
    "protein_g": 5.9,
    "salt_g": 0.145,
    "sat_fat_g": 2.81,
    "sodium_mg": 58.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-808",
  "state": "Unspecified",
  "subcategory": "WAA",
  "tags": [
    "legumes-and-pulses",
    "unspecified",
    "waa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
