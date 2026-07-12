/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.8,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, mayonnaise, soybean and safflower oil, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 2.7,
    "energy_kcal": 717.0,
    "fat_g": 79.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.5,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 34.0,
    "protein_g": 1.1,
    "salt_g": 1.42,
    "sat_fat_g": 8.6,
    "sodium_mg": 568.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 22.0,
    "vitamin_k_ug": 24.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171010",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
