/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup-pitted",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173958",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup-pitted",
      "kind": "unit",
      "label": "cup, pitted"
    }
  ],
  "name": "Cherries, sweet, canned, juice pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 13.8,
    "energy_kcal": 226.0,
    "fat_g": 0.02,
    "fibre_g": 1.5,
    "folate_ug": 4.0,
    "iron_mg": 0.58,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 131.0,
    "protein_g": 0.91,
    "salt_g": 0.0075,
    "sat_fat_g": 0.004,
    "sodium_mg": 3.0,
    "sugar_g": 12.3,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173958",
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
