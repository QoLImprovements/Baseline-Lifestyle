/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-cooked",
  "description": "Rice",
  "id": "usda-fndds-2708420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Yellow rice, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 19.1,
    "energy_kcal": 88.0,
    "fat_g": 0.45,
    "fibre_g": 0.5,
    "folate_ug": 25.0,
    "iron_mg": 0.62,
    "magnesium_mg": 30.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 42.0,
    "potassium_mg": 195.0,
    "protein_g": 1.8,
    "salt_g": 0.85,
    "sat_fat_g": 0.0,
    "sodium_mg": 340.0,
    "sugar_g": 0.45,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708420",
  "state": "Cooked",
  "subcategory": "Rice",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "rice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
