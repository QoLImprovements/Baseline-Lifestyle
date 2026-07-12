/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Apples, frozen, unsweetened, unheated (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.3,
    "energy_kcal": 201.0,
    "fat_g": 0.32,
    "fibre_g": 1.3,
    "folate_ug": 1.0,
    "iron_mg": 0.18,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 77.0,
    "protein_g": 0.28,
    "salt_g": 0.0075,
    "sat_fat_g": 0.053,
    "sodium_mg": 3.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171694",
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
