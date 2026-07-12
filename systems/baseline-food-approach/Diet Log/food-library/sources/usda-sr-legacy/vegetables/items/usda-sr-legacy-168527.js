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
  "id": "usda-sr-legacy-168527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cowpeas (blackeyes), immature seeds, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 23.5,
    "energy_kcal": 547.0,
    "fat_g": 0.66,
    "fibre_g": 6.4,
    "folate_ug": 141.0,
    "iron_mg": 2.12,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 375.0,
    "protein_g": 8.49,
    "salt_g": 0.6025,
    "sat_fat_g": 0.175,
    "sodium_mg": 241.0,
    "sugar_g": 4.46,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 36.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168527",
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
