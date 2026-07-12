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
  "id": "usda-sr-legacy-170517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pigeonpeas, immature seeds, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 19.5,
    "energy_kcal": 464.0,
    "fat_g": 1.36,
    "fibre_g": 4.2,
    "folate_ug": 100.0,
    "iron_mg": 1.57,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 456.0,
    "protein_g": 5.96,
    "salt_g": 0.6,
    "sat_fat_g": 0.365,
    "sodium_mg": 240.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 28.1,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 19.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170517",
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
