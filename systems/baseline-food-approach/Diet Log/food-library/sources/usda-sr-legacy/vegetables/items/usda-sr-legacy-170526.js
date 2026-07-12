/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    }
  ],
  "name": "Pumpkin, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 4.31,
    "energy_kcal": 74.0,
    "fat_g": 0.07,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 0.57,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 230.0,
    "protein_g": 0.72,
    "salt_g": 0.5925,
    "sat_fat_g": 0.037,
    "sodium_mg": 237.0,
    "sugar_g": 2.08,
    "vitamin_a_ug": 288.0,
    "vitamin_c_mg": 4.7,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170526",
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
