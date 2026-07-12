/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168537",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "mushroom",
      "kind": "unit",
      "label": "mushroom"
    }
  ],
  "name": "Mushrooms, white, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.29,
    "energy_kcal": 28.0,
    "fat_g": 0.47,
    "fibre_g": 2.2,
    "folate_ug": 18.0,
    "iron_mg": 1.74,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 356.0,
    "protein_g": 2.17,
    "salt_g": 0.595,
    "sat_fat_g": 0.061,
    "sodium_mg": 238.0,
    "sugar_g": 2.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168537",
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
