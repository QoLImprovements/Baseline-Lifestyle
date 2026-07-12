/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-gerber-second-food-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-earth-s-best-4-5-oz",
      "kind": "unit",
      "label": "jar Earth's Best (4.5 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, dinner, vegetables and turkey, strained",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 7.62,
    "energy_kcal": 201.0,
    "fat_g": 0.9,
    "fibre_g": 1.5,
    "folate_ug": 10.0,
    "iron_mg": 0.37,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 44.0,
    "potassium_mg": 102.0,
    "protein_g": 2.32,
    "salt_g": 0.05,
    "sat_fat_g": 0.236,
    "sodium_mg": 20.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 220.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173501",
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
