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
  "id": "usda-sr-legacy-173948",
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
  "name": "Blueberries, canned, heavy syrup, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 22.1,
    "energy_kcal": 368.0,
    "fat_g": 0.33,
    "fibre_g": 1.6,
    "folate_ug": 2.0,
    "iron_mg": 0.33,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 40.0,
    "protein_g": 0.65,
    "salt_g": 0.0075,
    "sat_fat_g": 0.027,
    "sodium_mg": 3.0,
    "sugar_g": 20.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173948",
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
