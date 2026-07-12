/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171677",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "0-75-cup",
      "kind": "unit",
      "label": "0.75 cup"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, whole wheat hot natural cereal, cooked with water, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 13.7,
    "energy_kcal": 62.0,
    "fat_g": 0.4,
    "fibre_g": 1.6,
    "folate_ug": 14.0,
    "iron_mg": 0.62,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 71.0,
    "protein_g": 2.0,
    "salt_g": 0.5825,
    "sat_fat_g": 0.06,
    "sodium_mg": 233.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171677",
  "state": "Cooked",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
