/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-piece-bagel-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "0-5-piece-bagel-1-serving",
      "kind": "unit",
      "label": "0.5 piece bagel 1 serving"
    }
  ],
  "name": "Bagels, whole grain white",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 54.5,
    "energy_kcal": 255.0,
    "fat_g": 0.0,
    "fibre_g": 4.7,
    "folate_ug": 140.0,
    "iron_mg": 4.19,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 176.0,
    "protein_g": 9.3,
    "salt_g": 0.93,
    "sat_fat_g": 0.0,
    "sodium_mg": 372.0,
    "sugar_g": 9.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174092",
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
