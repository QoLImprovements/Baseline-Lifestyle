/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-beech-nut-stage-1-2-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-beech-nut-stage-1-2-5-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 1 (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-second-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber Second Foods (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-strained-2-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (2.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, meat, chicken, strained",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 0.1,
    "energy_kcal": 130.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.4,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 141.0,
    "protein_g": 13.7,
    "salt_g": 0.1225,
    "sat_fat_g": 2.03,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173483",
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
