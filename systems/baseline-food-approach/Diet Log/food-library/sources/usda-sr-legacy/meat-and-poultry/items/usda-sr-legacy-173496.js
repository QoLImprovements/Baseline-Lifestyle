/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173496",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, chicken soup, strained",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 7.2,
    "energy_kcal": 209.0,
    "fat_g": 1.7,
    "fibre_g": 1.1,
    "folate_ug": 5.0,
    "iron_mg": 0.27,
    "magnesium_mg": 5.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 24.0,
    "potassium_mg": 66.0,
    "protein_g": 1.6,
    "salt_g": 0.04,
    "sat_fat_g": 0.278,
    "sodium_mg": 16.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173496",
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
