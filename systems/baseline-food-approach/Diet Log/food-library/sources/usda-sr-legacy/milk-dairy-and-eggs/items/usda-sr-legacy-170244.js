/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bag-8-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-170244",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "bag-8-oz",
      "kind": "unit",
      "label": "bag (8 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, corn-based, extruded, puffs or twists, cheese-flavor, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 54.1,
    "energy_kcal": 2340.0,
    "fat_g": 35.8,
    "fibre_g": 2.2,
    "folate_ug": 120.0,
    "iron_mg": 1.1,
    "magnesium_mg": 20.0,
    "omega3_g": 0.3,
    "phosphorus_mg": 108.0,
    "potassium_mg": 197.0,
    "protein_g": 5.76,
    "salt_g": 2.24,
    "sat_fat_g": 5.51,
    "sodium_mg": 896.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.12,
    "vitamin_k_ug": 36.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170244",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
