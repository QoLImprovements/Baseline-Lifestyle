/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "slice-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-serving",
      "kind": "unit",
      "label": "slice 1 serving"
    }
  ],
  "name": "Bread, cinnamon",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 44.4,
    "energy_kcal": 253.0,
    "fat_g": 5.29,
    "fibre_g": 3.5,
    "folate_ug": 56.0,
    "iron_mg": 2.54,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 74.0,
    "protein_g": 7.05,
    "salt_g": 0.97,
    "sat_fat_g": 0.0,
    "sodium_mg": 388.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171849",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
