/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "jar-beech-nut-baby-s-first-2-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-beech-nut-baby-s-first-2-5-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Baby's First (2.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-beginner-1-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Beginner-1 (2.5 oz)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
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
      "gramsPerUnit": 113.0,
      "key": "jar-earth-s-best-4-5-oz",
      "kind": "unit",
      "label": "jar Earth's Best (4.5 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-first-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber First Foods (2.5 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-i-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage I (4 oz)"
    }
  ],
  "name": "Babyfood, fruit, pears, strained",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 10.8,
    "energy_kcal": 174.0,
    "fat_g": 0.2,
    "fibre_g": 2.8,
    "folate_ug": 4.0,
    "iron_mg": 0.24,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 130.0,
    "protein_g": 0.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.012,
    "sodium_mg": 1.0,
    "sugar_g": 6.98,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 24.5,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171338",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
