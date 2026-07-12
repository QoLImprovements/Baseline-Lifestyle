/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-shredded",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168516",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cabbage, savoy, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 5.41,
    "energy_kcal": 100.0,
    "fat_g": 0.09,
    "fibre_g": 2.8,
    "folate_ug": 46.0,
    "iron_mg": 0.38,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 184.0,
    "protein_g": 1.8,
    "salt_g": 0.65,
    "sat_fat_g": 0.012,
    "sodium_mg": 260.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168516",
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
