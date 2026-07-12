/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lo mein, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 20.2,
    "energy_kcal": 121.0,
    "fat_g": 2.35,
    "fibre_g": 1.3,
    "folate_ug": 28.0,
    "iron_mg": 1.07,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 105.0,
    "protein_g": 4.77,
    "salt_g": 1.075,
    "sat_fat_g": 0.464,
    "sodium_mg": 430.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708799",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried-rice-and-lo-chow-mein",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
