/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-crushed-sliced-or-chunks",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "cup-crushed-sliced-or-chunks",
      "kind": "unit",
      "label": "cup, crushed, sliced, or chunks"
    }
  ],
  "name": "Pineapple, canned, extra heavy syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 21.5,
    "energy_kcal": 347.0,
    "fat_g": 0.11,
    "fibre_g": 0.8,
    "folate_ug": 5.0,
    "iron_mg": 0.38,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 102.0,
    "protein_g": 0.34,
    "salt_g": 0.0025,
    "sat_fat_g": 0.009,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 7.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169945",
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
