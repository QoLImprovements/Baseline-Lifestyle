/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
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
  "name": "Babyfood, vegetables, garden vegetable, strained",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 6.8,
    "energy_kcal": 32.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 40.0,
    "iron_mg": 0.83,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 168.0,
    "protein_g": 2.3,
    "salt_g": 0.0775,
    "sat_fat_g": 0.035,
    "sodium_mg": 31.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 303.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172284",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
