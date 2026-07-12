/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170495",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Seaweed, spirulina, dried",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 23.9,
    "energy_kcal": 290.0,
    "fat_g": 7.72,
    "fibre_g": 3.6,
    "folate_ug": 94.0,
    "iron_mg": 28.5,
    "magnesium_mg": 195.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 1360.0,
    "protein_g": 57.5,
    "salt_g": 2.625,
    "sat_fat_g": 2.65,
    "sodium_mg": 1050.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 25.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170495",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
