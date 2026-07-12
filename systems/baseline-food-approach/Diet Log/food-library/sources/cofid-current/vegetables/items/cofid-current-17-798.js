/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-798",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Halva, carrot, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 44.0,
    "energy_kcal": 354.0,
    "fat_g": 16.6,
    "fibre_g": 4.7,
    "folate_ug": 14.0,
    "iron_mg": 0.69,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 404.0,
    "protein_g": 4.8,
    "salt_g": 0.235,
    "sat_fat_g": 7.38,
    "sodium_mg": 94.0,
    "sugar_g": 43.3,
    "vitamin_a_ug": 2258.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-798",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "sec",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
