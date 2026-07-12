/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173151",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, NUTRI-GRAIN FRUIT AND NUT BAR",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 66.7,
    "energy_kcal": 1680.0,
    "fat_g": 10.9,
    "fibre_g": 7.5,
    "folate_ug": 127.0,
    "iron_mg": 5.65,
    "magnesium_mg": 105.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 328.0,
    "protein_g": 9.38,
    "salt_g": 0.4875,
    "sat_fat_g": 1.93,
    "sodium_mg": 195.0,
    "sugar_g": 32.4,
    "vitamin_a_ug": 267.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.72,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173151",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
