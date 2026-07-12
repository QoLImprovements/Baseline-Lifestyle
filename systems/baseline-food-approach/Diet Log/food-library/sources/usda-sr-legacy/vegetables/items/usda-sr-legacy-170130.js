/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Squash, winter, butternut, cooked, baked, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 10.5,
    "energy_kcal": 167.0,
    "fat_g": 0.09,
    "fibre_g": 3.2,
    "folate_ug": 19.0,
    "iron_mg": 0.6,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 284.0,
    "protein_g": 0.9,
    "salt_g": 0.6,
    "sat_fat_g": 0.019,
    "sodium_mg": 240.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 558.0,
    "vitamin_c_mg": 15.1,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170130",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
