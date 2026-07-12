/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "jar-beech-nut-stage-2-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169872",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "jar-heinz-strained-2-4-25-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4.25 oz)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, dessert, banana pudding, strained",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 14.1,
    "energy_kcal": 68.0,
    "fat_g": 0.8,
    "fibre_g": 0.8,
    "folate_ug": 6.0,
    "iron_mg": 0.3,
    "magnesium_mg": 5.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 34.0,
    "potassium_mg": 90.0,
    "protein_g": 1.0,
    "salt_g": 0.135,
    "sat_fat_g": 0.264,
    "sodium_mg": 54.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169872",
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
