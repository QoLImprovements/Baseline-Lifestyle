/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-5-cup-cubes",
      "kind": "unit",
      "label": "0.5 cup, cubes"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Yam, cooked, boiled, drained, or baked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 27.5,
    "energy_kcal": 486.0,
    "fat_g": 0.14,
    "fibre_g": 3.9,
    "folate_ug": 16.0,
    "iron_mg": 0.52,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 670.0,
    "protein_g": 1.49,
    "salt_g": 0.02,
    "sat_fat_g": 0.029,
    "sodium_mg": 8.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 12.1,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170072",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
