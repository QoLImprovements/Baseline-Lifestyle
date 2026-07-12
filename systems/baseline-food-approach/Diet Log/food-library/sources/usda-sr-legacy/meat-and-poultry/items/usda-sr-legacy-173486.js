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
  "id": "usda-sr-legacy-173486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-graduate-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber Graduate (2.5 oz)"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    }
  ],
  "name": "Babyfood, meat, meat sticks, junior",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 1.1,
    "energy_kcal": 770.0,
    "fat_g": 14.6,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 1.38,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 114.0,
    "protein_g": 13.4,
    "salt_g": 0.6675,
    "sat_fat_g": 5.82,
    "sodium_mg": 267.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173486",
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
