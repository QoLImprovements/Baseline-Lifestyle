/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, Pasta tubes with spinach and ricotta filling. Recipe from dietary survey records",
  "id": "cofid-current-15-708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cannelloni, spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 15.4,
    "energy_kcal": 140.0,
    "fat_g": 6.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.61,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 123.0,
    "protein_g": 5.2,
    "salt_g": 0.185,
    "sat_fat_g": 1.81,
    "sodium_mg": 74.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-708",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
