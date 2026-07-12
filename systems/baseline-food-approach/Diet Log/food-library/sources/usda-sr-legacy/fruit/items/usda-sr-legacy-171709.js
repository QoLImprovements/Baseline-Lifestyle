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
  "id": "usda-sr-legacy-171709",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Blackberries, canned, heavy syrup, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 23.1,
    "energy_kcal": 92.0,
    "fat_g": 0.14,
    "fibre_g": 3.4,
    "folate_ug": 27.0,
    "iron_mg": 0.65,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 99.0,
    "protein_g": 1.31,
    "salt_g": 0.0075,
    "sat_fat_g": 0.005,
    "sodium_mg": 3.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 13.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171709",
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
