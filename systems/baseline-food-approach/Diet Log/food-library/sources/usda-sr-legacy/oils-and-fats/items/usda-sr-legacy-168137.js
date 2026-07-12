/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup-crushed",
  "description": "Snacks",
  "id": "usda-sr-legacy-168137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "10-chips",
      "kind": "unit",
      "label": "10 chips"
    }
  ],
  "name": "Snacks, tortilla chips, light (baked with less oil)",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 73.4,
    "energy_kcal": 465.0,
    "fat_g": 15.2,
    "fibre_g": 5.7,
    "folate_ug": 16.0,
    "iron_mg": 1.63,
    "magnesium_mg": 97.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 272.0,
    "protein_g": 8.7,
    "salt_g": 1.0,
    "sat_fat_g": 2.84,
    "sodium_mg": 400.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168137",
  "state": "Baked",
  "subcategory": "Snacks",
  "tags": [
    "baked",
    "oils-and-fats",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
