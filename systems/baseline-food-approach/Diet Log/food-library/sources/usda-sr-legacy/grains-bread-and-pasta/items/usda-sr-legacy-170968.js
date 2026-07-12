/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, cereal, oatmeal, with honey, dry",
  "nutritionPerBasis": {
    "calcium_mg": 1150.0,
    "carbs_g": 69.3,
    "energy_kcal": 1640.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 67.2,
    "magnesium_mg": 146.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 733.0,
    "potassium_mg": 259.0,
    "protein_g": 13.5,
    "salt_g": 0.1175,
    "sat_fat_g": 0.0,
    "sodium_mg": 47.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170968",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
