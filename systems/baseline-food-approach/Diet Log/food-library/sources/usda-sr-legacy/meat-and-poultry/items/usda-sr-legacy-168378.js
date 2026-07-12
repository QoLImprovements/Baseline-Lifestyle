/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "rack",
      "kind": "unit",
      "label": "rack"
    }
  ],
  "name": "Pork, fresh, loin, country-style ribs, separable lean only, bone-in, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 0.0,
    "energy_kcal": 905.0,
    "fat_g": 11.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.02,
    "magnesium_mg": 24.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 284.0,
    "potassium_mg": 370.0,
    "protein_g": 27.8,
    "salt_g": 0.21,
    "sat_fat_g": 3.1,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168378",
  "state": "Grilled",
  "subcategory": "Pork Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
