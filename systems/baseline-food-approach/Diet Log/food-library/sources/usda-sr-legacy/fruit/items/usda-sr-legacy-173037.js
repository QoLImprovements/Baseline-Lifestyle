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
  "id": "usda-sr-legacy-173037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 254.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Grapefruit, sections, canned, light syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 15.4,
    "energy_kcal": 60.0,
    "fat_g": 0.1,
    "fibre_g": 0.4,
    "folate_ug": 9.0,
    "iron_mg": 0.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 129.0,
    "protein_g": 0.56,
    "salt_g": 0.005,
    "sat_fat_g": 0.014,
    "sodium_mg": 2.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.3,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173037",
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
