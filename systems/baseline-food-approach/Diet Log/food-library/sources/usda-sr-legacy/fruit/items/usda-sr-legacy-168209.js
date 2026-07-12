/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-unthawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168209",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    }
  ],
  "name": "Raspberries, frozen, red, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 12.6,
    "energy_kcal": 234.0,
    "fat_g": 0.81,
    "fibre_g": 4.3,
    "folate_ug": 28.0,
    "iron_mg": 0.76,
    "magnesium_mg": 23.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 30.0,
    "potassium_mg": 184.0,
    "protein_g": 1.15,
    "salt_g": 0.01,
    "sat_fat_g": 0.064,
    "sodium_mg": 4.0,
    "sugar_g": 6.54,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 17.6,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168209",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
