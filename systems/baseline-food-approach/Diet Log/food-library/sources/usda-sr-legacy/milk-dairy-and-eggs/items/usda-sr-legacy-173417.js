/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "4-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "cup-not-packed",
      "kind": "unit",
      "label": "cup (not packed)"
    }
  ],
  "name": "Cheese, cottage, lowfat, 1% milkfat",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 2.72,
    "energy_kcal": 72.0,
    "fat_g": 1.02,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.14,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 86.0,
    "protein_g": 12.4,
    "salt_g": 1.015,
    "sat_fat_g": 0.645,
    "sodium_mg": 406.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173417",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
