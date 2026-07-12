/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170957",
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
  "name": "Babyfood, fruit, apple and blueberry, strained",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 16.3,
    "energy_kcal": 255.0,
    "fat_g": 0.2,
    "fibre_g": 1.8,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 69.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.024,
    "sodium_mg": 1.0,
    "sugar_g": 13.9,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 27.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170957",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
