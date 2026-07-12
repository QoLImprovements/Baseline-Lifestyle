/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "stick",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-graduate-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber Graduate (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, meat, chicken sticks, junior",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 1.5,
    "energy_kcal": 787.0,
    "fat_g": 14.4,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 1.56,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 106.0,
    "protein_g": 14.6,
    "salt_g": 0.6675,
    "sat_fat_g": 4.09,
    "sodium_mg": 267.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172249",
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
