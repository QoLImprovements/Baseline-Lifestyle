/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Pasta sauces, tomato-based",
  "id": "usda-fndds-2706471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spaghetti sauce with meat and added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 6.05,
    "energy_kcal": 86.0,
    "fat_g": 4.13,
    "fibre_g": 1.4,
    "folate_ug": 16.0,
    "iron_mg": 1.02,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 314.0,
    "protein_g": 6.03,
    "salt_g": 0.8325,
    "sat_fat_g": 1.33,
    "sodium_mg": 333.0,
    "sugar_g": 4.03,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706471",
  "state": "Unspecified",
  "subcategory": "Pasta sauces, tomato-based",
  "tags": [
    "meat-and-poultry",
    "pasta-sauces-tomato-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
