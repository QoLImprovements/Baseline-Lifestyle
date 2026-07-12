/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pitted",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-pitted",
      "kind": "unit",
      "label": "cup, pitted"
    }
  ],
  "name": "Cherries, sweet, canned, water pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 11.8,
    "energy_kcal": 192.0,
    "fat_g": 0.13,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.36,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 131.0,
    "protein_g": 0.77,
    "salt_g": 0.0025,
    "sat_fat_g": 0.028,
    "sodium_mg": 1.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173957",
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
