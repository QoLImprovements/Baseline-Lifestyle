/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, dinner, macaroni and cheese, strained",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 8.95,
    "energy_kcal": 280.0,
    "fat_g": 2.11,
    "fibre_g": 0.7,
    "folate_ug": 11.0,
    "iron_mg": 0.21,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 67.0,
    "protein_g": 3.14,
    "salt_g": 0.22,
    "sat_fat_g": 1.29,
    "sodium_mg": 88.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173503",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
