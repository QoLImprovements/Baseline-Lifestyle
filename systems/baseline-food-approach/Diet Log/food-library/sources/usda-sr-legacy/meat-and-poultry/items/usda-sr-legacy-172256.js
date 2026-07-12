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
  "id": "usda-sr-legacy-172256",
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
  "name": "Babyfood, dinner, vegetables and dumplings and beef, strained",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.7,
    "energy_kcal": 201.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.39,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 46.0,
    "protein_g": 2.0,
    "salt_g": 0.1225,
    "sat_fat_g": 0.0,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172256",
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
