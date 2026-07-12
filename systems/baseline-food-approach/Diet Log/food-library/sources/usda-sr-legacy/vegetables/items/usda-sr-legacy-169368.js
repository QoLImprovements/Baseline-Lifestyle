/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169368",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sesbania flower, cooked, steamed, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.1,
    "energy_kcal": 90.0,
    "fat_g": 0.05,
    "fibre_g": 0.0,
    "folate_ug": 57.0,
    "iron_mg": 0.56,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 107.0,
    "protein_g": 1.14,
    "salt_g": 0.6175,
    "sat_fat_g": 0.0,
    "sodium_mg": 247.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169368",
  "state": "Steamed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "steamed",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
