/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-172350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Margarine-like, vegetable oil spread, 60% fat, stick/tub/bottle, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.86,
    "energy_kcal": 533.0,
    "fat_g": 59.8,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 2.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 16.0,
    "potassium_mg": 30.0,
    "protein_g": 0.17,
    "salt_g": 0.005,
    "sat_fat_g": 12.1,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 21.1,
    "vitamin_k_ug": 101.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172350",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
