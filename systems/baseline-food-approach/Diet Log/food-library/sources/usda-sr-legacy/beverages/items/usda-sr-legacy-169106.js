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
  "id": "usda-sr-legacy-169106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tangerines, (mandarin oranges), canned, juice pack",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 9.57,
    "energy_kcal": 155.0,
    "fat_g": 0.03,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.27,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 133.0,
    "protein_g": 0.62,
    "salt_g": 0.0125,
    "sat_fat_g": 0.003,
    "sodium_mg": 5.0,
    "sugar_g": 8.87,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 34.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169106",
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
