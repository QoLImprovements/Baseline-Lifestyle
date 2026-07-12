/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Seeds, sunflower seed butter, with salt added (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 23.3,
    "energy_kcal": 2580.0,
    "fat_g": 55.2,
    "fibre_g": 5.7,
    "folate_ug": 237.0,
    "iron_mg": 4.12,
    "magnesium_mg": 311.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 666.0,
    "potassium_mg": 576.0,
    "protein_g": 17.3,
    "salt_g": 0.8275,
    "sat_fat_g": 4.68,
    "sodium_mg": 331.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 22.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168595",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
