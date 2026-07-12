/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-beech-nut-stage-2-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
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
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, dinner, vegetables chicken, strained",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 8.42,
    "energy_kcal": 247.0,
    "fat_g": 1.73,
    "fibre_g": 2.1,
    "folate_ug": 5.0,
    "iron_mg": 0.53,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 47.0,
    "potassium_mg": 158.0,
    "protein_g": 2.47,
    "salt_g": 0.06,
    "sat_fat_g": 0.496,
    "sodium_mg": 24.0,
    "sugar_g": 1.58,
    "vitamin_a_ug": 207.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173498",
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
