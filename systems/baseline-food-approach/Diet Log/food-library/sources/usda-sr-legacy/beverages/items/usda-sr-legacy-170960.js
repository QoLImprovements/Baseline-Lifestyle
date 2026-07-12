/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-heinz-strained-4-fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170960",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-heinz-strained-4-fl-oz",
      "kind": "unit",
      "label": "bottle Heinz Strained (4 fl oz)"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Babyfood, juice, orange and apple and banana",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 11.5,
    "energy_kcal": 197.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.35,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 134.0,
    "protein_g": 0.4,
    "salt_g": 0.0,
    "sat_fat_g": 0.016,
    "sodium_mg": 0.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 32.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170960",
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
