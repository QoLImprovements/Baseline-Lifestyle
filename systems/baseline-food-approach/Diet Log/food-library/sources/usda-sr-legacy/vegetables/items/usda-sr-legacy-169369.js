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
  "id": "usda-sr-legacy-169369",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soybeans, mature seeds, sprouted, cooked, steamed, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 6.53,
    "energy_kcal": 81.0,
    "fat_g": 4.45,
    "fibre_g": 0.8,
    "folate_ug": 80.0,
    "iron_mg": 1.31,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 355.0,
    "protein_g": 8.47,
    "salt_g": 0.615,
    "sat_fat_g": 0.617,
    "sodium_mg": 246.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 8.3,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 33.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169369",
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
