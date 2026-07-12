/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-837",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Truffles, rum, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 54.2,
    "energy_kcal": 529.0,
    "fat_g": 32.9,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 2.53,
    "magnesium_mg": 78.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 273.0,
    "protein_g": 6.0,
    "salt_g": 0.1275,
    "sat_fat_g": 19.02,
    "sodium_mg": 51.0,
    "sugar_g": 53.4,
    "vitamin_a_ug": 147.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-837",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "other-foods",
    "sea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
