/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170939",
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
      "gramsPerUnit": 95.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Babyfood, vegetables, peas, strained",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 8.36,
    "energy_kcal": 50.0,
    "fat_g": 0.43,
    "fibre_g": 2.0,
    "folate_ug": 28.0,
    "iron_mg": 0.95,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 106.0,
    "protein_g": 3.27,
    "salt_g": 0.0125,
    "sat_fat_g": 0.07,
    "sodium_mg": 5.0,
    "sugar_g": 2.01,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170939",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
