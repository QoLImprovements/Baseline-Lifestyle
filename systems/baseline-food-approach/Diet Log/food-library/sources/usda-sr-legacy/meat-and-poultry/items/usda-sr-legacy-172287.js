/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172287",
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
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
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
      "key": "jar-heinz-strained-2-4-oz",
      "kind": "unit",
      "label": "jar Heinz Strained-2 (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, apples and chicken, strained",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 10.9,
    "energy_kcal": 272.0,
    "fat_g": 1.38,
    "fibre_g": 1.8,
    "folate_ug": 1.0,
    "iron_mg": 0.38,
    "magnesium_mg": 6.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 32.0,
    "potassium_mg": 95.0,
    "protein_g": 2.16,
    "salt_g": 0.03,
    "sat_fat_g": 0.347,
    "sodium_mg": 12.0,
    "sugar_g": 6.06,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172287",
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
