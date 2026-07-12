/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "jar-heinz-strained-2-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172271",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-beginner-1-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Beginner-1 (2.5 oz)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-i-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage I (4 oz)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-first-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber First Foods (2.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, vegetables, green beans, strained",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 6.29,
    "energy_kcal": 27.0,
    "fat_g": 0.17,
    "fibre_g": 2.2,
    "folate_ug": 24.0,
    "iron_mg": 0.67,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 146.0,
    "protein_g": 1.2,
    "salt_g": 0.0175,
    "sat_fat_g": 0.039,
    "sodium_mg": 7.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 42.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172271",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
