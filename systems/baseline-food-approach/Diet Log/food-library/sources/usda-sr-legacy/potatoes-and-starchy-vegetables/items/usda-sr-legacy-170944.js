/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
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
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, fruit, plums with tapioca, without ascorbic acid, strained",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 19.7,
    "energy_kcal": 297.0,
    "fat_g": 0.0,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 0.2,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 85.0,
    "protein_g": 0.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 13.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170944",
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
