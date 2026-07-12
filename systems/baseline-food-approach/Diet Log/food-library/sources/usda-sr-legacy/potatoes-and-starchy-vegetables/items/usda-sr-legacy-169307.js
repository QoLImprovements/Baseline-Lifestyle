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
  "id": "usda-sr-legacy-169307",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Sweet potato, frozen, cooked, baked, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 23.4,
    "energy_kcal": 419.0,
    "fat_g": 0.12,
    "fibre_g": 1.8,
    "folate_ug": 22.0,
    "iron_mg": 0.54,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 377.0,
    "protein_g": 1.71,
    "salt_g": 0.02,
    "sat_fat_g": 0.025,
    "sodium_mg": 8.0,
    "sugar_g": 9.17,
    "vitamin_a_ug": 1040.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169307",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
