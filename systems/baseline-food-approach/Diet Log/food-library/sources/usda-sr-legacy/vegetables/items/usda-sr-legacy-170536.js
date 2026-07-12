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
  "id": "usda-sr-legacy-170536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    }
  ],
  "name": "Squash, winter, butternut, frozen, cooked, boiled, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 10.0,
    "energy_kcal": 165.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.58,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 133.0,
    "protein_g": 1.23,
    "salt_g": 0.595,
    "sat_fat_g": 0.014,
    "sodium_mg": 238.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 167.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170536",
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
