/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-169745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 174.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spelt, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 70.2,
    "energy_kcal": 338.0,
    "fat_g": 2.43,
    "fibre_g": 10.7,
    "folate_ug": 45.0,
    "iron_mg": 4.44,
    "magnesium_mg": 136.0,
    "omega3_g": 0.065,
    "phosphorus_mg": 401.0,
    "potassium_mg": 388.0,
    "protein_g": 14.6,
    "salt_g": 0.02,
    "sat_fat_g": 0.406,
    "sodium_mg": 8.0,
    "sugar_g": 6.82,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169745",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
