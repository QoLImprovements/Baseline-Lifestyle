/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-diced",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168168",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    }
  ],
  "name": "Rhubarb, frozen, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 194.0,
    "carbs_g": 5.1,
    "energy_kcal": 88.0,
    "fat_g": 0.11,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.29,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 108.0,
    "protein_g": 0.55,
    "salt_g": 0.005,
    "sat_fat_g": 0.029,
    "sodium_mg": 2.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168168",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
