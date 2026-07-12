/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-whole",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    }
  ],
  "name": "Peaches, spiced, canned, heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 20.1,
    "energy_kcal": 314.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 3.0,
    "iron_mg": 0.28,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 85.0,
    "protein_g": 0.41,
    "salt_g": 0.01,
    "sat_fat_g": 0.011,
    "sodium_mg": 4.0,
    "sugar_g": 18.8,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169114",
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
