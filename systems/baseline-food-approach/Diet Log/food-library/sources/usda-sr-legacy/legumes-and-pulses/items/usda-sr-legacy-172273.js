/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, green beans, dices, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 5.7,
    "energy_kcal": 29.0,
    "fat_g": 0.2,
    "fibre_g": 1.3,
    "folate_ug": 32.0,
    "iron_mg": 0.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 116.0,
    "protein_g": 1.2,
    "salt_g": 0.0925,
    "sat_fat_g": 0.044,
    "sodium_mg": 37.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 11.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172273",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
