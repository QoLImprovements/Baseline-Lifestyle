/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "5-prunes-with-liquid",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168159",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "5-prunes-with-liquid",
      "kind": "unit",
      "label": "5 prunes with liquid"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Prunes, canned, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 27.8,
    "energy_kcal": 439.0,
    "fat_g": 0.2,
    "fibre_g": 3.8,
    "folate_ug": 0.0,
    "iron_mg": 0.41,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 226.0,
    "protein_g": 0.87,
    "salt_g": 0.0075,
    "sat_fat_g": 0.016,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168159",
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
