/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170958",
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
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, fruit, apple and blueberry, junior",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 16.6,
    "energy_kcal": 259.0,
    "fat_g": 0.2,
    "fibre_g": 1.8,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 65.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.024,
    "sodium_mg": 1.0,
    "sugar_g": 8.83,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170958",
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
