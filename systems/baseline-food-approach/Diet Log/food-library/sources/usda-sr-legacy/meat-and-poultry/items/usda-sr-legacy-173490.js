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
  "id": "usda-sr-legacy-173490",
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
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, macaroni and tomato and beef, strained",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 9.45,
    "energy_kcal": 255.0,
    "fat_g": 1.47,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 0.46,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 112.0,
    "protein_g": 2.36,
    "salt_g": 0.095,
    "sat_fat_g": 0.486,
    "sodium_mg": 38.0,
    "sugar_g": 2.09,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.62,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173490",
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
