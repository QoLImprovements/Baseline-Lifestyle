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
  "id": "usda-sr-legacy-169352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "cup-1-cubes",
      "kind": "unit",
      "label": "cup (1\" cubes)"
    }
  ],
  "name": "Eggplant, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 8.14,
    "energy_kcal": 33.0,
    "fat_g": 0.23,
    "fibre_g": 2.5,
    "folate_ug": 14.0,
    "iron_mg": 0.25,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 123.0,
    "protein_g": 0.83,
    "salt_g": 0.5975,
    "sat_fat_g": 0.044,
    "sodium_mg": 239.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169352",
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
