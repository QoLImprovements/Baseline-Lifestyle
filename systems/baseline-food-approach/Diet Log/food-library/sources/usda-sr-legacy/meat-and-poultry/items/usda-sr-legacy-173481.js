/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173481",
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
      "gramsPerUnit": 71.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, meat, lamb, strained",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.85,
    "energy_kcal": 394.0,
    "fat_g": 3.41,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.19,
    "magnesium_mg": 13.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 104.0,
    "potassium_mg": 193.0,
    "protein_g": 14.1,
    "salt_g": 0.1075,
    "sat_fat_g": 1.65,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173481",
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
