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
  "id": "usda-sr-legacy-168517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cabbage, chinese (pak-choi), cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 1.78,
    "energy_kcal": 12.0,
    "fat_g": 0.16,
    "fibre_g": 1.0,
    "folate_ug": 41.0,
    "iron_mg": 1.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 371.0,
    "protein_g": 1.56,
    "salt_g": 0.675,
    "sat_fat_g": 0.021,
    "sodium_mg": 270.0,
    "sugar_g": 0.83,
    "vitamin_a_ug": 212.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 34.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168517",
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
