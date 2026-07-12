/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169233",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup-1-cubes",
      "kind": "unit",
      "label": "cup (1\" cubes)"
    }
  ],
  "name": "Gourd, white-flowered (calabash), cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.69,
    "energy_kcal": 63.0,
    "fat_g": 0.02,
    "fibre_g": 1.2,
    "folate_ug": 4.0,
    "iron_mg": 0.25,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 170.0,
    "protein_g": 0.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.002,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169233",
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
