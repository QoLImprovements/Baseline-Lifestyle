/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171379",
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
      "gramsPerUnit": 229.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, dessert, custard pudding, vanilla, strained",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 16.0,
    "energy_kcal": 356.0,
    "fat_g": 2.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.24,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 66.0,
    "protein_g": 1.6,
    "salt_g": 0.0,
    "sat_fat_g": 1.01,
    "sodium_mg": 0.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171379",
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
