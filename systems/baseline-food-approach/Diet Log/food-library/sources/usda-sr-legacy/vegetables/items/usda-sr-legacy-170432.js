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
  "id": "usda-sr-legacy-170432",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pokeberry shoots, (poke), raw",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 3.7,
    "energy_kcal": 96.0,
    "fat_g": 0.4,
    "fibre_g": 1.7,
    "folate_ug": 16.0,
    "iron_mg": 1.7,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 242.0,
    "protein_g": 2.6,
    "salt_g": 0.0575,
    "sat_fat_g": 0.0,
    "sodium_mg": 23.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 435.0,
    "vitamin_c_mg": 136.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170432",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
