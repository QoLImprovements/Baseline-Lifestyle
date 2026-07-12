/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "jar-gerber-third-foods-6-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171347",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-gerber-third-foods-6-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (6 oz)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, fruit, pears and pineapple, junior",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.4,
    "energy_kcal": 184.0,
    "fat_g": 0.2,
    "fibre_g": 2.6,
    "folate_ug": 3.0,
    "iron_mg": 0.21,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 118.0,
    "protein_g": 0.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.013,
    "sodium_mg": 0.0,
    "sugar_g": 7.36,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 16.8,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171347",
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
