/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped-or-strips",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup-chopped-or-strips",
      "kind": "unit",
      "label": "cup, chopped or strips"
    },
    {
      "gramsPerUnit": 11.6,
      "key": "tablespoon-chopped",
      "kind": "unit",
      "label": "tablespoon, chopped"
    }
  ],
  "name": "Peppers, sweet, green, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 6.7,
    "energy_kcal": 28.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 16.0,
    "iron_mg": 0.46,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 166.0,
    "protein_g": 0.92,
    "salt_g": 0.005,
    "sat_fat_g": 0.029,
    "sodium_mg": 2.0,
    "sugar_g": 3.19,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 74.4,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170428",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
