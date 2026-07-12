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
  "id": "usda-sr-legacy-171701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup-whole-without-pits",
      "kind": "unit",
      "label": "cup, whole, without pits"
    }
  ],
  "name": "Apricots, canned, extra heavy syrup pack, without skin, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 24.8,
    "energy_kcal": 402.0,
    "fat_g": 0.04,
    "fibre_g": 1.6,
    "folate_ug": 2.0,
    "iron_mg": 0.62,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 126.0,
    "protein_g": 0.55,
    "salt_g": 0.0325,
    "sat_fat_g": 0.003,
    "sodium_mg": 13.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171701",
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
