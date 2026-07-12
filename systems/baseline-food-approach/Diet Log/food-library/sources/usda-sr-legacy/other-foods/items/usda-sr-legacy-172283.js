/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "cup",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172283",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "serving-3-5-oz-serving",
      "kind": "unit",
      "label": "serving 3.5 oz serving"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "package-7-oz",
      "kind": "unit",
      "label": "package 7 oz"
    }
  ],
  "name": "Babyfood, vegetables, mix vegetables junior",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 8.2,
    "energy_kcal": 151.0,
    "fat_g": 0.4,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.41,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 170.0,
    "protein_g": 1.4,
    "salt_g": 0.09,
    "sat_fat_g": 0.079,
    "sodium_mg": 36.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 210.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 7.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172283",
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
