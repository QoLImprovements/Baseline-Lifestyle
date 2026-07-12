/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172245",
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
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, meat, veal, strained",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.51,
    "energy_kcal": 81.0,
    "fat_g": 2.45,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.76,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 170.0,
    "protein_g": 13.1,
    "salt_g": 0.0975,
    "sat_fat_g": 1.06,
    "sodium_mg": 39.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172245",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
