/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170544",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Taro, leaves, cooked, steamed, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 3.89,
    "energy_kcal": 24.0,
    "fat_g": 0.41,
    "fibre_g": 2.0,
    "folate_ug": 48.0,
    "iron_mg": 1.18,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 460.0,
    "protein_g": 2.72,
    "salt_g": 0.595,
    "sat_fat_g": 0.083,
    "sodium_mg": 238.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 212.0,
    "vitamin_c_mg": 35.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170544",
  "state": "Steamed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "steamed",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
