/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "jar-beech-nut-stage-3-6-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 170.0,
      "key": "jar-gerber-third-foods-6-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (6 oz)"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
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
    }
  ],
  "name": "Babyfood, dessert, custard pudding, vanilla, junior",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 17.6,
    "energy_kcal": 360.0,
    "fat_g": 0.98,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 0.22,
    "magnesium_mg": 5.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 55.0,
    "potassium_mg": 68.0,
    "protein_g": 1.76,
    "salt_g": 0.065,
    "sat_fat_g": 0.325,
    "sodium_mg": 26.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171380",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
