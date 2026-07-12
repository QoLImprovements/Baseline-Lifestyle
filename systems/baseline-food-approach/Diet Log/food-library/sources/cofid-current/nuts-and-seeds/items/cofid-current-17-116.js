/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peanut brittle, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 73.8,
    "energy_kcal": 483.0,
    "fat_g": 19.0,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.1,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 240.0,
    "protein_g": 8.6,
    "salt_g": 0.275,
    "sat_fat_g": 5.3,
    "sodium_mg": 110.0,
    "sugar_g": 71.8,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-116",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "nuts-and-seeds",
    "sec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
