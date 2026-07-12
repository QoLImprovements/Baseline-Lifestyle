/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Guava sauce, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 9.48,
    "energy_kcal": 151.0,
    "fat_g": 0.14,
    "fibre_g": 3.6,
    "folate_ug": 5.0,
    "iron_mg": 0.18,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 225.0,
    "protein_g": 0.32,
    "salt_g": 0.01,
    "sat_fat_g": 0.04,
    "sodium_mg": 4.0,
    "sugar_g": 5.88,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 146.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174686",
  "state": "Cooked",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "condiments-and-sauces",
    "cooked",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
