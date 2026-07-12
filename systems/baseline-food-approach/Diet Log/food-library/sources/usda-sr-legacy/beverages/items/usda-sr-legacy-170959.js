/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-gerber-first-food-4-fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-gerber-first-food-4-fl-oz",
      "kind": "unit",
      "label": "bottle Gerber First Food (4 fl oz)"
    },
    {
      "gramsPerUnit": 31.7,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-beech-nut-stage-i-4-fl-oz",
      "kind": "unit",
      "label": "bottle Beech-Nut Stage I (4 fl oz)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "bottle-earth-s-best-4-2-fl-oz",
      "kind": "unit",
      "label": "bottle Earth's Best (4.2 fl oz)"
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
    }
  ],
  "name": "Babyfood, juice, apple",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 11.7,
    "energy_kcal": 197.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.57,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 91.0,
    "protein_g": 0.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.018,
    "sodium_mg": 8.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 57.9,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170959",
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
