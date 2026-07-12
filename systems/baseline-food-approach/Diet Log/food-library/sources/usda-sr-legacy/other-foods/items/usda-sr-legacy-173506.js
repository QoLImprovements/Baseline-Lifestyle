/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "jar-beech-nut-stage-i-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-i-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage I (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-beech-nut-baby-s-first-2-5-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Baby's First (2.5 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-first-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber First Foods (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-beginner-1-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Beginner-1 (2.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-earth-s-best-4-5-oz",
      "kind": "unit",
      "label": "jar Earth's Best (4.5 oz)"
    }
  ],
  "name": "Babyfood, vegetables, carrots, strained",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 6.0,
    "energy_kcal": 26.0,
    "fat_g": 0.1,
    "fibre_g": 1.7,
    "folate_ug": 15.0,
    "iron_mg": 0.37,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 196.0,
    "protein_g": 0.8,
    "salt_g": 0.1725,
    "sat_fat_g": 0.018,
    "sodium_mg": 69.0,
    "sugar_g": 3.64,
    "vitamin_a_ug": 573.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173506",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
