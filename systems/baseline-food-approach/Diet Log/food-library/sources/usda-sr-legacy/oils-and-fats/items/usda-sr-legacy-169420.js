/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "oz-28-almonds",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz-28-almonds",
      "kind": "unit",
      "label": "oz (28 almonds)"
    }
  ],
  "name": "Nuts, almonds, oil roasted, with salt added, smoke flavor",
  "nutritionPerBasis": {
    "calcium_mg": 286.0,
    "carbs_g": 17.9,
    "energy_kcal": 607.0,
    "fat_g": 55.9,
    "fibre_g": 10.7,
    "folate_ug": 0.0,
    "iron_mg": 3.86,
    "magnesium_mg": 286.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 679.0,
    "protein_g": 21.4,
    "salt_g": 1.37,
    "sat_fat_g": 3.57,
    "sodium_mg": 548.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 25.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169420",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
