/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "12-fries",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-167606",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "12-fries",
      "kind": "unit",
      "label": "12 fries"
    }
  ],
  "name": "Sweet Potatoes, french fried, frozen as packaged, salt added in processing",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 35.6,
    "energy_kcal": 182.0,
    "fat_g": 8.92,
    "fibre_g": 5.7,
    "folate_ug": 32.0,
    "iron_mg": 0.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.305,
    "phosphorus_mg": 59.0,
    "potassium_mg": 409.0,
    "protein_g": 2.16,
    "salt_g": 0.365,
    "sat_fat_g": 1.16,
    "sodium_mg": 146.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 434.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167606",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
