/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Snacks",
  "id": "usda-sr-legacy-169861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, popcorn, home-prepared, oil-popped, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 58.1,
    "energy_kcal": 500.0,
    "fat_g": 28.1,
    "fibre_g": 10.0,
    "folate_ug": 17.0,
    "iron_mg": 2.78,
    "magnesium_mg": 108.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 225.0,
    "protein_g": 9.0,
    "salt_g": 0.0075,
    "sat_fat_g": 5.05,
    "sodium_mg": 3.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.43,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169861",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "oils-and-fats",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
