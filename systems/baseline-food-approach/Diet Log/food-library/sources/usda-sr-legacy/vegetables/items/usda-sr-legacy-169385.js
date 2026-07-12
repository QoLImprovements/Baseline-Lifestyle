/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "bulb",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "bulb",
      "kind": "unit",
      "label": "bulb"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Fennel, bulb, raw",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 7.3,
    "energy_kcal": 31.0,
    "fat_g": 0.2,
    "fibre_g": 3.1,
    "folate_ug": 27.0,
    "iron_mg": 0.73,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 414.0,
    "protein_g": 1.24,
    "salt_g": 0.13,
    "sat_fat_g": 0.09,
    "sodium_mg": 52.0,
    "sugar_g": 3.93,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 62.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169385",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
