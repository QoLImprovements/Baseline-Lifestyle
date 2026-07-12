/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171854",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Crackers, toast thins, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 67.7,
    "energy_kcal": 442.0,
    "fat_g": 16.1,
    "fibre_g": 9.7,
    "folate_ug": 33.0,
    "iron_mg": 3.48,
    "magnesium_mg": 102.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 266.0,
    "potassium_mg": 306.0,
    "protein_g": 6.45,
    "salt_g": 0.4425,
    "sat_fat_g": 3.23,
    "sodium_mg": 177.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 27.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171854",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
