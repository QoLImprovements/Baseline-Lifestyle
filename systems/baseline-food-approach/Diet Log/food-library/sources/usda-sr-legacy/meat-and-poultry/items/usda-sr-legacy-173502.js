/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-gerber-third-foods-6-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (6 oz)"
    }
  ],
  "name": "Babyfood, dinner, vegetables and turkey, junior",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.55,
    "energy_kcal": 222.0,
    "fat_g": 1.74,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.36,
    "magnesium_mg": 9.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 32.0,
    "potassium_mg": 98.0,
    "protein_g": 1.72,
    "salt_g": 0.1125,
    "sat_fat_g": 0.485,
    "sodium_mg": 45.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 216.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173502",
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
