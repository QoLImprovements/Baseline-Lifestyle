/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-whole-without-pits",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup-whole-without-pits",
      "kind": "unit",
      "label": "cup, whole, without pits"
    }
  ],
  "name": "Apricots, canned, water pack, without skin, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 5.48,
    "energy_kcal": 92.0,
    "fat_g": 0.03,
    "fibre_g": 1.1,
    "folate_ug": 2.0,
    "iron_mg": 0.54,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 154.0,
    "protein_g": 0.69,
    "salt_g": 0.0275,
    "sat_fat_g": 0.002,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173936",
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
