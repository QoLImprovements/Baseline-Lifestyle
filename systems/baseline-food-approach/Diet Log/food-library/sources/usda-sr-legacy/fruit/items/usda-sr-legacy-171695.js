/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Applesauce, canned, unsweetened, without added ascorbic acid (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 11.3,
    "energy_kcal": 176.0,
    "fat_g": 0.1,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.23,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 74.0,
    "protein_g": 0.17,
    "salt_g": 0.005,
    "sat_fat_g": 0.008,
    "sodium_mg": 2.0,
    "sugar_g": 9.39,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171695",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
