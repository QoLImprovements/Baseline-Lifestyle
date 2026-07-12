/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-gerber-second-foods-4-fl-oz",
      "kind": "unit",
      "label": "bottle Gerber Second Foods (4 fl oz)"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-heinz-strained-4-fl-oz",
      "kind": "unit",
      "label": "bottle Heinz Strained (4 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-beech-nut-stage-3-4-fl-oz",
      "kind": "unit",
      "label": "bottle Beech-Nut Stage 3 (4 fl oz)"
    }
  ],
  "name": "Babyfood, juice, orange",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 10.2,
    "energy_kcal": 45.0,
    "fat_g": 0.3,
    "fibre_g": 0.1,
    "folate_ug": 26.0,
    "iron_mg": 0.17,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 184.0,
    "protein_g": 0.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.035,
    "sodium_mg": 0.0,
    "sugar_g": 8.26,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 62.5,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171354",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
