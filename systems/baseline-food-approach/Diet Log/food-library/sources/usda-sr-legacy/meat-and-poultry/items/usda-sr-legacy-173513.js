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
  "id": "usda-sr-legacy-173513",
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
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-gerber-third-foods-6-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (6 oz)"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-beech-nut-stage-3-6-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 3 (6 oz)"
    }
  ],
  "name": "Babyfood, dinner, vegetables and chicken, junior",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 8.66,
    "energy_kcal": 222.0,
    "fat_g": 1.12,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.33,
    "magnesium_mg": 8.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 32.0,
    "potassium_mg": 83.0,
    "protein_g": 2.04,
    "salt_g": 0.085,
    "sat_fat_g": 0.302,
    "sodium_mg": 34.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173513",
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
