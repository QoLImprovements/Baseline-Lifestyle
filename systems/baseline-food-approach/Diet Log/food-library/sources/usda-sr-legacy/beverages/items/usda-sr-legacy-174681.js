/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Grapefruit juice, white, frozen concentrate, unsweetened, diluted with 3 volume water",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 9.73,
    "energy_kcal": 41.0,
    "fat_g": 0.13,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.14,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 136.0,
    "protein_g": 0.55,
    "salt_g": 0.0025,
    "sat_fat_g": 0.019,
    "sodium_mg": 1.0,
    "sugar_g": 9.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 33.7,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174681",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "frozen",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
