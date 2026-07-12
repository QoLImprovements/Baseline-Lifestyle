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
  "id": "usda-sr-legacy-168184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tangerines, (mandarin oranges), canned, juice pack, drained",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 9.41,
    "energy_kcal": 38.0,
    "fat_g": 0.04,
    "fibre_g": 1.2,
    "folate_ug": 5.0,
    "iron_mg": 0.27,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 136.0,
    "protein_g": 0.75,
    "salt_g": 0.0125,
    "sat_fat_g": 0.004,
    "sodium_mg": 5.0,
    "sugar_g": 8.25,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 33.9,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168184",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "canned",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
