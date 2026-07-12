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
  "id": "usda-sr-legacy-170946",
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
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "jar-heinz-strained-2-4-25-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4.25 oz)"
    }
  ],
  "name": "Babyfood, fruit, prunes with tapioca, without ascorbic acid, strained",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 18.5,
    "energy_kcal": 291.0,
    "fat_g": 0.1,
    "fibre_g": 2.7,
    "folate_ug": 0.0,
    "iron_mg": 0.35,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 177.0,
    "protein_g": 0.6,
    "salt_g": 0.0125,
    "sat_fat_g": 0.008,
    "sodium_mg": 5.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 15.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170946",
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
