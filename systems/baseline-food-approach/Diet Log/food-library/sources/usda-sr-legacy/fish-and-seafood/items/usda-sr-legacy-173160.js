/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving",
  "description": "Snacks",
  "id": "usda-sr-legacy-173160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Snacks, shrimp cracker",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 59.1,
    "energy_kcal": 426.0,
    "fat_g": 17.9,
    "fibre_g": 5.6,
    "folate_ug": 23.0,
    "iron_mg": 1.91,
    "magnesium_mg": 72.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 191.0,
    "potassium_mg": 193.0,
    "protein_g": 7.14,
    "salt_g": 1.4275,
    "sat_fat_g": 5.36,
    "sodium_mg": 571.0,
    "sugar_g": 21.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.28,
    "vitamin_k_ug": 12.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173160",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "fish-and-seafood",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
