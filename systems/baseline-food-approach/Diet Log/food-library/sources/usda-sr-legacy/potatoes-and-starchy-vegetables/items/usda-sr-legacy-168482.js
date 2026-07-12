/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168482",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "sweetpotato-5-long",
      "kind": "unit",
      "label": "sweetpotato, 5\" long"
    }
  ],
  "name": "Sweet potato, raw, unprepared (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 20.1,
    "energy_kcal": 359.0,
    "fat_g": 0.05,
    "fibre_g": 3.0,
    "folate_ug": 11.0,
    "iron_mg": 0.61,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 337.0,
    "protein_g": 1.57,
    "salt_g": 0.1375,
    "sat_fat_g": 0.018,
    "sodium_mg": 55.0,
    "sugar_g": 4.18,
    "vitamin_a_ug": 709.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168482",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
