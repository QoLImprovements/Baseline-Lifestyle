/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "jar-heinz-junior-3-6-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172277",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-heinz-junior-3-6-oz",
      "kind": "unit",
      "label": "jar Heinz Junior-3 (6 oz)"
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
      "gramsPerUnit": 224.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-beech-nut-stage-3-6-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 3 (6 oz)"
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
    }
  ],
  "name": "Babyfood, vegetables, sweet potatoes, junior",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 14.0,
    "energy_kcal": 252.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 10.0,
    "iron_mg": 0.39,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 243.0,
    "protein_g": 1.1,
    "salt_g": 0.045,
    "sat_fat_g": 0.021,
    "sodium_mg": 18.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 332.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172277",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
