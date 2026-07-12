/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171377",
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
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-heinz-junior-3-6-oz",
      "kind": "unit",
      "label": "jar Heinz Junior-3 (6 oz)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-gerber-third-foods-6-oz",
      "kind": "unit",
      "label": "jar Gerber Third Foods (6 oz)"
    }
  ],
  "name": "Babyfood, dessert, fruit dessert, without ascorbic acid, junior",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 17.2,
    "energy_kcal": 264.0,
    "fat_g": 0.0,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.21,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 95.0,
    "protein_g": 0.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171377",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
