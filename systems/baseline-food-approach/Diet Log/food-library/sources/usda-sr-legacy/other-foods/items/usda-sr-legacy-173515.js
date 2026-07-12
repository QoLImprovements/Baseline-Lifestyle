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
  "id": "usda-sr-legacy-173515",
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
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, vegetables, mix vegetables strained",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 8.25,
    "energy_kcal": 150.0,
    "fat_g": 0.5,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.32,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 127.0,
    "protein_g": 1.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.089,
    "sodium_mg": 0.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 158.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173515",
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
